import React, { useEffect, useRef, useState } from "react";
import styles from './Employee.module.css'
export const Employee = () => {
    const userref=useRef()
  const [form, setForm] = useState({
    username: "",
    age: "",
    address:"",
    department:"",
    salary: "",
    martial: "false",
    profile: "",
  });
  const handelchange = (e) => {
    let { type, value, name, checked, files } = e.target;
    //    console.log(e)
    //     console.log(type,name,value,checked)
    if (type === "checkbox") {
      setForm({
        ...form,
        [name]: checked,
      });
    } else if (type === "file") {
      setForm({
        ...form,
        [name]: files,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handelSubmit=(e)=>{
      e.preventDefault()

      if(!form.username){ userref.current.focus()
       userref.current.className+=styles.redborder
    }
   console.log(form)
  }

  // useEffect(()=>{
  //     console.log(form)
  // },[form])

  return (
    <div className={styles.forms}>

      <form className={styles.box} onSubmit={handelSubmit}>
        <div className={styles.data}>
          <label className={styles.clr}>Name:</label>
          <input
          ref={userref}
            type="text"
            value={form.username}
            name="username"
            onChange={handelchange}
            placeholder="Name..."
          />
        </div>

        <div  className={styles.data}>
          <label className={styles.clr}>Age:</label>
          <input
            type="number"
            value={form.age}
            name="age"
            onChange={handelchange}
            placeholder="Age..."
          />
        </div>

        <div  className={styles.data}>
          <label className={styles.clr}>Address:</label>
          <input
            type="text"
            value={form.address}
            name="address"
            onChange={handelchange}
            placeholder="Address..."
          />
        </div>
        <div  className={styles.data}>
          <label className={styles.clr}>Department:</label>
          <select
            name="department"
            value={form.department}
            onChange={handelchange}
          >
            <option value="">---</option>
            <option value="VP">VP</option>
            <option value="Product Manager">Product Manager</option>
            <option value='Software Architect'>Software Architect</option>
            <option value='Chief Architect'>Chief Architect</option>
            <option value='Software Engineew'>Software Engineew</option>
            <option value='Software Developer'>Software Developer</option>
            <option value='junior Software Developer'>junior Software Developer</option>

          
          </select>
        </div>

        <div  className={styles.data}>
          <label className={styles.clr}>Salary:</label>
          <input
            type="number"
            value={form.salary}
            name="salary"
            onChange={handelchange}
            placeholder="Salary..."
          />
        </div>
     
        <div  className={styles.data}>
          <input
            type="checkbox"
            checked={form.martial}
            name="maritial"
            onChange={handelchange}
          />
          <label className={styles.clr}>Martial status</label>
        </div>

        <div  className={styles.data}>
          <input
            type="file"
            files={form.profile}
            accept="image/jpeg , image/jpeg, application/pdf"
            name="profile"
            onChange={handelchange}
          />
        </div>
        <button className={styles.btn} type="submit">Submit</button>
      </form>
    </div>
  );
};
