/*
            ↓ 부분을 사용했던 함수: onBlockOpen
        if (!(isFinish || ground[id].isOpen)) {
            if (ground[id].val === 'X') {
                dispatch(finishGame('Game Over...'));
            } else if (ground[id].val === 0) {
                let visited = new Array(size).fill(false);
                let queue = [id];
                let zeroBlock = [id];

                visited[id] = true;
                dispatch(openBlock(id));

                while (queue.length > 0) {
                    let idx = queue.shift();

                    for (let i = 0; i < 4; i++) {
                        let localNearBlock = idx + storeNearBlock[i];

                        if (localNearBlock > -1 && localNearBlock < size && !ground[localNearBlock].isOpen &&
                            ground[localNearBlock].val === 0 && !visited[localNearBlock] &&
                            !((idx % width === 0 && localNearBlock % width === width - 1) ||
                                (idx % width === width - 1 && localNearBlock % width === 0))) {
                            queue.push(localNearBlock);
                            zeroBlock.push(localNearBlock);
                            visited[localNearBlock] = true;
                            dispatch(openBlock(localNearBlock));
                        }
                    }
                }

                visited = new Array(size).fill(false);

                while (zeroBlock.length > 0) {
                    let idx = zeroBlock.shift();

                    for (let i = 0; i < 8; i++) {
                        let localNearBlock = idx + storeNearBlock[i];

                        if (localNearBlock > -1 && localNearBlock < size &&
                            !visited[localNearBlock] &&
                            ground[localNearBlock].val > 0 &&
                            !ground[localNearBlock].isOpen &&
                            !((idx % width === 0 && localNearBlock % width === width - 1) ||
                                (idx % width === width - 1 && localNearBlock % width === 0))) {
                            visited[localNearBlock] = true;
                            dispatch(openBlock(localNearBlock));
                        }
                    }
                }
            } else {
                dispatch(openBlock(id));
            }
        }*/

/*
             ↓ 부분을 사용했던 함수: onMouseDownAction
            let storeNearBlock = nearBlock.slice();
            let nearCloseBlock = [];
            let nearFlag = [];
            let localNearBlock = 0;
            while (storeNearBlock.length > 0) {
                localNearBlock = id + storeNearBlock.pop();
                if (
                    localNearBlock > -1 && localNearBlock < size &&
                    !ground[localNearBlock].isOpen &&
                    !((id % width === 0 && localNearBlock % width === width - 1) ||
                        (id % width === width - 1 && localNearBlock % width === 0))
                ) {
                    if (ground[localNearBlock].flagSet) {
                        nearFlag.push(localNearBlock);
                    } else {
                        nearCloseBlock.push(localNearBlock);
                    }
                }
            }

            if (nearFlag.length === ground[id].val) {
                while (nearCloseBlock.length > 0) {
                    const space = nearCloseBlock.pop();
                    onBlockOpen(space);
                }
            } else {
                while (nearCloseBlock.length > 0) {
                    const space = nearCloseBlock.pop();
                    dispatch(highlightOn(space));
                }
            }*/

/*
             ↓ 부분을 사용했던 함수: onMouseUpAction
            let storeNearBlock = nearBlock.slice();
            let nearCloseBlock = [];
            let localNearBlock = 0;
            while (storeNearBlock.length > 0) {
                localNearBlock = id + storeNearBlock.pop();

                if (
                    localNearBlock > -1 && localNearBlock < size &&
                    !ground[localNearBlock].isOpen && !ground[localNearBlock].flagSet &&
                    !((id % width === 0 && localNearBlock % width === width - 1) ||
                        (id % width === width - 1 && localNearBlock % width === 0))
                ) {
                    nearCloseBlock.push(localNearBlock);
                }
            }

            while (nearCloseBlock.length > 0) {
                const space = nearCloseBlock.pop();
                dispatch(highlightOff(space));
            }*/