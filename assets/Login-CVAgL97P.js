import{e as g,g as h,f,j as e,l as n,B as w,q as d,t as j,T as b,o as v,H as S}from"./index-DDIWK_Zb.js";import{S as N}from"./Sub_Loader-CVCoM0at.js";const y=()=>{var l,i;const m=g(),c=h(),{register:t,handleSubmit:u,formState:{errors:s,isSubmitting:r}}=f(),x=async p=>{const o=await d.login(p);if(o.$id){const a=await d.getCurrentUser();a!=null&&a.$id&&(c(j(a)),m("/"),b({message:"Successfully Logged In"}))}else console.log(o),v.error("Invalid User Credentials !!",{position:"top-center",autoClose:1500,pauseOnHover:!0,transition:S,theme:"light"})};return e.jsx("div",{className:"w-full h-full flex justify-center flex-col items-center",children:e.jsxs("div",{className:"w-[400px] p-10 shadow-2xl rounded-md",children:[e.jsx("h2",{className:"text-4xl font-serif mb-5 w-full text-center",children:"Login"}),e.jsxs("form",{onSubmit:u(x),className:"w-full max-w-lg rounded-xl border-[1px] border-white",children:[e.jsx(n,{label:"email :",type:"email",placeHolder:"Enter Your Email",...t("email",{required:"Email is required"})}),s.email&&e.jsx("p",{className:"text-red-600 text-[0.8rem] m-0 mb-4",role:"alert",children:(l=s.email)==null?void 0:l.message}),e.jsx(n,{label:"password :",type:"password",placeHolder:"Enter Your Password",parentClass:"mt-5",...t("password",{minLength:{value:8,message:"Password must contain atleast 8 chars"},maxLength:{value:64,message:"Password cannot exceed 64 chars"},required:"Password is required"})}),s.password&&e.jsx("p",{className:"text-red-600 text-[0.8rem] m-0 mb-4",role:"alert",children:(i=s.password)==null?void 0:i.message}),r?e.jsx(N,{}):e.jsx(w,{disabled:r,className:"mt-5 w-full text-center",type:"submit",children:"Sign In"})]})]})})},E=()=>e.jsx("div",{children:e.jsx(y,{})});export{E as default};