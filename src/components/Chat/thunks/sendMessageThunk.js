import { sendMessage } from '../../../requests';

export const sendMessageThunk = (payload) => async (dispatch) => {
  try {
    const { data } = await sendMessage(payload);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
