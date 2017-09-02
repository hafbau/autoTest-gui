export function createListener(event, socket) {
    return (dispatch) => {
        console.log("before on event", socket && typeof socket.on === 'function', socket)
        if(socket && typeof socket.on === 'function') socket.on(event, ({ type, payload }) => {
            console.log("got here socket", type, "payload", payload)
            dispatch({ type, payload });
        });
    }

}