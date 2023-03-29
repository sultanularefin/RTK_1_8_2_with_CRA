// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export const get_Notification_Counter = async (logger_ID)=>{
// export async function get_Notification_Counter(logger_ID) {



      await fetch(
      'https://wexprez.com/wex_api/api/notification/get_all_count',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // user_id: notification_Number_Payload.logger_ID,
          user_id: logger_ID
        }),
      },

  );

  /*


        console.log("response: -___--___----____---_-----__",response);


        console.log("response.status: -___--___----____---_-----__ ",response.status);
        const data = await response.json();



        console.log("data: ",data);

        if (response.status === 200) {

            console.log("__data__ and status 200", data);

        } else {
            console.log("__data__: ",data);


        }
    } catch (error) {
        console.log('Error___', error.response.data);
        // thunkAPI.rejectWithValue(error.response.data);
    }
    */
}
