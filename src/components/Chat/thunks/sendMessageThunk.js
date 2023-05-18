import { sendMessage } from '../../../requests';

export const sendMessageThunk = (payload) => async (dispatch) => {
  try {
    const { data } = await sendMessage(payload);
  } catch (error) {
    console.error(error);
  }
};
