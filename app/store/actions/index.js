export function updateData() {
    return async (dispatch, getState) => {

        const prevCounter = getState().timer.counter;

        try {
            dispatch({
                type: 'ADD_DATA',
                payload: prevCounter + 1,
            });

        } catch (err) {
            console.error("Error: ", err);
        }
    }
}