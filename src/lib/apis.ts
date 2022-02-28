const API_BASE_URL = "https://dwf-m7-postgresql.herokuapp.com";
export const emailRegex =
   /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

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
   console.log("getTokenUser", {
      email,
      password,
   });

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

export async function getPetsAround(lat, lng) {
   const res = await fetch(`${API_BASE_URL}/pets/around?lat=${lat}&lng=${lng}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
   });

   const pets = await res.json();

   if (res.status === 200) {
      return pets;
   }
   return;
}
