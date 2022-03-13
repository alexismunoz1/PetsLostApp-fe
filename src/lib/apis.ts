export const API_BASE_URL = "https://dwf-m7-postgresql.herokuapp.com";
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

type dataReportInfo = {
   petid: string;
   fullname: string;
   phonenumber: string;
   report: string;
   token: string;
};

export async function reportInfo(data: dataReportInfo): Promise<any> {
   const { petid, fullname, phonenumber, report, token } = data;

   const res = await fetch(`${API_BASE_URL}/pets/report`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
         petid,
         fullname,
         phonenumber,
         report,
      }),
   });

   return res.json();
}

export async function getUserPets(token: string) {
   const res = await fetch(`${API_BASE_URL}/me/pets`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${token}`,
      },
   });

   return res.json();
}

export async function getPetById(petId: string, token: string) {
   const res = await fetch(`${API_BASE_URL}/me/pets/${petId}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${token}`,
      },
   });

   return res.json();
}

type petData = {
   petid?: string;
   lat: string;
   lng: string;
   petimage: string;
   petname: string;
   petstate?: string;
   ubication: string;
};

export async function createPet(petData: petData, token: string) {
   const { petname, lat, lng, ubication, petimage } = petData;
   const res = await fetch(`${API_BASE_URL}/me/pets`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
         lat,
         lng,
         petname,
         petimage,
         ubication,
      }),
   });

   return res.json();
}

export async function editPet(petData: petData, token: string) {
   const { petid, lat, lng, petimage, petname, ubication } = petData;

   const res = await fetch(`${API_BASE_URL}/me/pets`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
         petid,
         lat,
         lng,
         petname,
         petimage,
         ubication,
      }),
   });

   return res.json();
}

export async function updateStatePet(petid: string, token: string): Promise<any> {
   return await fetch(`${API_BASE_URL}/me/pets/state`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
         petid,
         petstate: "found",
      }),
   });
}

export async function deletePet(petid: string, token: string): Promise<any> {
   return await fetch(`${API_BASE_URL}/me/pets`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
         petid,
      }),
   });
}
