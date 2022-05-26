import React from 'react'
import styles from './Table.module.css'
const Table = () => {
  return (
    <div >
        <table className={styles.employee}>
            <thead>
                <th>Profile photo</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Martial State</th>
            </thead>
            <tbody>
            
            </tbody>
        </table>



    </div>
  )
}

export default Table