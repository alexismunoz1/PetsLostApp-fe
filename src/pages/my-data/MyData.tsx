import React from "react";
import { Title } from "ui/title/Title";
import { FormMyData } from "components/form-my-data/FormMyData";

export function MyDataPage() {
   return (
      <section>
         <Title>My Data</Title>
         <FormMyData />
      </section>
   );
}
