export const API_BASE_URL = "https://dwf-m7-postgresql.herokuapp.com";

export async function checkEmail(email: string): Promise<any> {
   const res = await fetch(`${API_BASE_URL}/auth/verify-email`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({
         email: email,
      }),
   });

   const data = await res.json();

   if (res.status === 200) {
      return data;
   }
   return;
}

export async function getTokenUser(email: string, password: string) {
   const res = await fetch(`${API_BASE_URL}/auth/token`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({
         email,
         password,
      }),
   });

   const token = await res.json();

   if (res.status === 200) {
      return token;
   }
   return;
}

type dataSignUp = {
   fullname: string;
   email: string;
   password: string;
};

export async function singup(data: dataSignUp) {
   const res = await fetch(`${API_BASE_URL}/auth`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
   });

   const newUser = await res.json();

   if (res.status === 200) {
      return newUser;
   }
   return;
}
