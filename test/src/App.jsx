import React from "react";
import {
  Button,
  Input,
  FormWrapper,
  SelectInput,
  ButtonGroup,
  ButtonDropdown,
} from "@git21221/form-snippet";
import { months, dates, years, skills, options } from "./data/data";

function App() {
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <div className="max-w-[400px] p-3 flex flex-col gap-3 shadow-2xl rounded-lg">
        <h1 className="text-xl">Signup using form-snippet</h1>
        <div className="flex gap-3">
          <Input
            name="fName"
            label="First Name"
            required
            type="text"
            fullWidth
            className={"bg-black text-green-300"}
          />
          <Input
            name="lName"
            label="Last Name"
            required
            type={"text"}
            fullWidth
          />
        </div>
        <div className="">
          <Input
            name="pass"
            label="Password"
            type="password"
            fullWidth
            endIcon
          />
        </div>
        <div className="">
          <Input
            name="mobile"
            label="Mobile number or email"
            type={"text"}
            fullWidth
          />
        </div>
        <div className="flex gap-3">
          <SelectInput
            name="month"
            label="Month"
            options={months}
            required
            fullWidth
          />
          <SelectInput
            name="date"
            label="Date"
            options={dates}
            required
            fullWidth
          />
          <SelectInput
            name="year"
            label="Year"
            options={years}
            required
            fullWidth
          />
        </div>
        <div>
          <SelectInput
            name="skills"
            label="Skills"
            options={skills}
            fullWidth
            multiple={{ checkBox: true }}
            renderStyle={"chip"}
          />
        </div>
        <ButtonGroup variant={"outlined"}>
          <Button children={"Submit"} variant={"contained"} disableElevation />
          <Button children={"Submit"} />
        </ButtonGroup>
        <ButtonDropdown options={options} />
      </div>
    </FormWrapper>
  );
}

export default App;
