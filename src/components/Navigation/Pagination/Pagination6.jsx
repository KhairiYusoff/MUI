// import { Box, IconButton, Typography, TextField } from "@material-ui/core";
// import FirstPageDoubleArrow from "../../../assets/icons/first_page_double_arrow.svg";
// import LastPageDoubleArrow from "../../../assets/icons/last_page_double_arrow.svg";
// import PrevArrow from "../../../assets/icons/prev_page.svg";
// import NextArrow from "../../../assets/icons/next_page.svg";

// function LeadsListingPagination({ page = 1, totalPages = 32, onPageChange }) {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         gap: 1,
//       }}
//     >
//       <IconButton onClick={() => onPageChange(1)} disabled={page === 1}>
//         <img src={FirstPageDoubleArrow} alt="First page" />
//       </IconButton>
//       <IconButton onClick={() => onPageChange(page - 1)} disabled={page === 1}>
//         <img src={PrevArrow} alt="Previous page" />
//       </IconButton>

//       <TextField
//         value={page}
//         onChange={(e) => {
//           const value = parseInt(e.target.value);
//           if (value > 0 && value <= totalPages) {
//             onPageChange(value);
//           }
//         }}
//         sx={{
//           width: "48px", // Adjust based on design
//           "& .MuiOutlinedInput-input": {
//             padding: "4px 8px",
//             textAlign: "center",
//           },
//         }}
//         inputProps={{
//           type: "number",
//           min: 1,
//           max: totalPages,
//         }}
//       />

//       <Typography color="text.secondary">of {totalPages}</Typography>

//       <IconButton
//         onClick={() => onPageChange(page + 1)}
//         disabled={page === totalPages}
//       >
//         <img src={NextArrow} alt="Next page" />
//       </IconButton>
//       <IconButton
//         onClick={() => onPageChange(totalPages)}
//         disabled={page === totalPages}
//       >
//         <img src={LastPageDoubleArrow} alt="Last page" />
//       </IconButton>
//     </Box>
//   );
// }

// export default LeadsListingPagination;
