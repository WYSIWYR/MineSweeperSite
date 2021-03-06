import Joi from "@hapi/joi";
import User from "../../models/user";

/*
회원가입
POST /api/auth/register
{
 "username": "wysiwyr",
 "password": "wysiwyrpwd"
}
 */
export const register = async ctx => {
    // Requset Body 검증하기
    const schema = Joi.object().keys({
        username: Joi.string()
            .alphanum()
            .min(3)
            .max(20)
            .required(),
        password: Joi.string().required(),
    });
    const result = schema.validate(ctx.request.body);
    if (result.error) {
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    const {username, password} = ctx.request.body;
    try {
        const exist = await User.findByUsername(username);
        if (exist) {
            ctx.status = 409;
            return;
        }

        const user = new User({
            username,
        });
        await user.setPassword(password);
        await user.save();

        ctx.body = user.serialize();
        const token = user.generateToken();
        ctx.cookies.set('access_token', token, {
            maxAge: 604800000, // 1000 * 60 * 60 * 24 * 7 7일
            httpOnly: true,
        });
    } catch (e) {
        ctx.throw(500, e);
    }
};

/*
로그인
POST /api/auth/login
{
 "username": "wysiwyr",
 "password": "wysiwyrpwd"
}
 */
export const login = async ctx => {
    const {username, password} = ctx.request.body;

    // username, password가 없으면 에러 처리
    if (!username || !password) {
        ctx.status = 401;
        return;
    }

    try {
        const user = await User.findByUsername(username);
        // 계정이 없으면 에러 처리
        if (!user) {
            ctx.status = 401;
            return;
        }

        const valid = await user.checkPassword(password);
        // 비밀번호가 올바르지 않으면 에러 처리
        if (!valid) {
            ctx.status = 401;
            return;
        }
        ctx.body = user.serialize();
        const token = user.generateToken();
        ctx.cookies.set('access_token', token, {
            maxAge: 604800000, // 1000 * 60 * 60 * 24 * 7 7일
            httpOnly: true,
        });
    } catch (e) {
        ctx.throw(500, e);
    }
};

/*
토큰 확인
GET /api/auth/check
 */
export const check = async ctx => {
    const {user} = ctx.state;
    // 로그인 중 아님
    if (!user) {
        ctx.status = 401; // Unauthorized
        return;
    }
    ctx.body = user;
};

/*
로그아웃
POST /api/auth/logout
 */
export const logout = async ctx => {
    ctx.cookies.set('access_token');
    ctx.status = 204; // No Content
};