// // import Head from 'next/head';
// // import NextLink from 'next/link';
// //import { useRouter } from 'next/router';
// import { useFormik } from 'formik';
// // import { Card, CardContent } from '@mui/material';
// import * as Yup from 'yup';
// // import {
// //   Box,
// //   Button,
// //   Checkbox,
// //   Container,
// //   FormHelperText,
// //   Link,
// //   TextField,
// //   Typography
// // } from '@mui/material';
// // import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// const Register = () => {
//   //const router = useRouter();
//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       firstName: '',
//       lastName: '',
//       password: '',
//       policy: false
//     },
//     validationSchema: Yup.object({
//       email: Yup
//         .string()
//         .email(
//           'Must be a valid email')
//         .max(255)
//         .required(
//           'Email is required'),
//       firstName: Yup
//         .string()
//         .max(255)
//         .required(
//           'First name is required'),
//       lastName: Yup
//         .string()
//         .max(255)
//         .required(
//           'Last name is required'),
//       password: Yup
//         .string()
//         .max(255)
//         .required(
//           'Password is required'),
//       policy: Yup
//         .boolean()
//         .oneOf(
//           [true],
//           'This field must be checked'
//         )
//     }),
//     onSubmit: () => {
//       //router.push('/');
//       console.log("Hi")
//     }
//   });

//   return (
//     <>
//         <div class="container-sm">
//             {/* <div class="col-8 col-lg-4 col-xl-3">
//                     <div class="card border-0">
//                         <div class="card-body text-center py-4">
//                 <Button
//                   component="a"
//                   startIcon={<ArrowBackIcon fontSize="small" />}
//                 >
//                   Dashboard
//                 </Button>
//               <form onSubmit={formik.handleSubmit}>
//                 <Box sx={{ my: 3 }}>
//                   <Typography
//                     color="textPrimary"
//                     variant="h4"
//                   >
//                     Create a new account
//                   </Typography>
//                   <Typography
//                     color="textSecondary"
//                     gutterBottom
//                     variant="body2"
//                   >
//                     Use your email to create a new account
//                   </Typography>
//                 </Box>
//                 <TextField
//                   error={Boolean(formik.touched.firstName && formik.errors.firstName)}
//                   fullWidth
//                   helperText={formik.touched.firstName && formik.errors.firstName}
//                   label="First Name"
//                   margin="normal"
//                   name="firstName"
//                   onBlur={formik.handleBlur}
//                   onChange={formik.handleChange}
//                   value={formik.values.firstName}
//                   variant="outlined"
//                 />
//                 <TextField
//                   error={Boolean(formik.touched.lastName && formik.errors.lastName)}
//                   fullWidth
//                   helperText={formik.touched.lastName && formik.errors.lastName}
//                   label="Last Name"
//                   margin="normal"
//                   name="lastName"
//                   onBlur={formik.handleBlur}
//                   onChange={formik.handleChange}
//                   value={formik.values.lastName}
//                   variant="outlined"
//                 />
//                 <TextField
//                   error={Boolean(formik.touched.email && formik.errors.email)}
//                   fullWidth
//                   helperText={formik.touched.email && formik.errors.email}
//                   label="Email Address"
//                   margin="normal"
//                   name="email"
//                   onBlur={formik.handleBlur}
//                   onChange={formik.handleChange}
//                   type="email"
//                   value={formik.values.email}
//                   variant="outlined"
//                 />
//                 <TextField
//                   error={Boolean(formik.touched.password && formik.errors.password)}
//                   fullWidth
//                   helperText={formik.touched.password && formik.errors.password}
//                   label="Password"
//                   margin="normal"
//                   name="password"
//                   onBlur={formik.handleBlur}
//                   onChange={formik.handleChange}
//                   type="password"
//                   value={formik.values.password}
//                   variant="outlined"
//                 />
//                 <Box
//                   sx={{
//                     alignItems: 'center',
//                     display: 'flex',
//                     ml: -1
//                   }}
//                 >
//                   <Checkbox
//                     checked={formik.values.policy}
//                     name="policy"
//                     onChange={formik.handleChange}
//                   />
//                   <Typography
//                     color="textSecondary"
//                     variant="body2"
//                   >
//                     I have read the
//                     {' '}
//                     <NextLink
//                       href="/#"
//                       passHref
//                     >
//                       <Link
//                         color="primary"
//                         underline="always"
//                         variant="subtitle2"
//                       >
//                         Terms and Conditions
//                       </Link>
//                     </NextLink>
//                   </Typography>
//                 </Box>
//                 {Boolean(formik.touched.policy && formik.errors.policy) && (
//                   <FormHelperText error>
//                     {formik.errors.policy}
//                   </FormHelperText>
//                 )}
//                 <Box sx={{ py: 2 }}>
//                   <Button
//                     color="primary"
//                     disabled={formik.isSubmitting}
//                     fullWidth
//                     size="large"
//                     type="submit"
//                     variant="contained"
//                   >
//                     Sign Up Now
//                   </Button>
//                 </Box> */}
// {/* 
//               </form>
//               </div>
//             </div> 
//           </div>*/}
//                 <form class="px-4 py-3">
//             <div class="mb-3">
//             <label for="exampleDropdownFormEmail1" class="form-label">Email address</label>
//             <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
//             </div>
//             <div class="mb-3">
//             <label for="exampleDropdownFormPassword1" class="form-label">Password</label>
//             <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
//             </div>
//             <div class="mb-3">
//             <div class="form-check">
//                 <input type="checkbox" class="form-check-input" id="dropdownCheck"/>
//                 <label class="form-check-label" for="dropdownCheck">
//                 Remember me
//                 </label>
//             </div>
//             </div>
//             <button type="submit" class="btn btn-primary">Sign in</button>
//         </form>
//         <div class="dropdown-divider"></div>
//         <a class="dropdown-item" href="/#">New around here? Sign up</a>
//         <a class="dropdown-item" href="/#">Forgot password?</a>
//         </div>
//     </>
//   );
// };

// export default Register;

export default class Register extends Component {
  render() {
    return (
      <>
<div class="container-sm">
                
                <form class="px-4 py-3">
                    <div class="mb-3">
                        <label for="exampleDropdownFormEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleDropdownFormPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
                    </div>
                    <div class="mb-3">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="dropdownCheck" />
                            <label class="form-check-label" for="dropdownCheck">
                                Remember me
                            </label>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </form>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/#">New around here? Sign up</a>
                <a class="dropdown-item" href="/#">Forgot password?</a>
            </div>
</>);
}
}
