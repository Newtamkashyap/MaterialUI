import { TextField, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";


export function MuiDemo() {
    return (
        <div>
            <div>
                <h4>Bootstrap Form</h4>
                <label className="form-label">UserName</label>
                <input type="text" />

                <label className="form-label">Password</label>
                <input type="password" />

                <button className="btn btn-primary">Login</button>
            </div>


            <div>
                <h4>Material UI Form</h4>
                <TextField label="UserName" variant="outlined" />
                <TextField label="Password" variant="standard" />
                <Button variant="contained" color="warning">Login</Button>
            </div>



        </div >

    )
}