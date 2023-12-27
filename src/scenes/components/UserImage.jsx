import {Box} from "@mui/material";



const UserImage = ({image,size = "60px"})=>{
    console.log(image)
    return(
        <Box width = {size} height = {size}>
            <img
            // objectFit : "cover" so ittakes up entire space and crops as necessary
            // if you have your image cenetred object-fit covers  perfect fit it crops the size it needs to ,to fit the size
            style = {{objectFit : "cover" , borderRadius : "50%"}}
            width={size}
            height={size}
            alt = "user"
            src = {`http://localhost:3002/assets/${image}`}
            />
        
        
        
            </Box>
    )


}


export default UserImage