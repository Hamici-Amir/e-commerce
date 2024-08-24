import { motion } from "framer-motion";
import { useState,useRef,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../zustand/store";
import toast from "react-hot-toast";

 const EmailVerification = () => {
    const [code, setCode] = useState(["", "", "", "", "", ""]);
	const navigate = useNavigate();
    const inputRefs = useRef([]);
    const handleChange = (index, value) => {
		const newCode = [...code];

		// Handle pasted content
		if (value.length > 1) {
			const pastedCode = value.slice(0, 6).split("");
			for (let i = 0; i < 6; i++) {
				newCode[i] = pastedCode[i] || "";
			}
			setCode(newCode);

			// Focus on the last non-empty input or the first empty one
			const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
			const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
			inputRefs.current[focusIndex].focus();
		} else {
			newCode[index] = value;
			setCode(newCode);

			// Move focus to the next input field if value is entered
			if (value && index < 5) {
				inputRefs.current[index + 1].focus();
			}
		}
	};

	const handleKeyDown = (index, e) => {
		if (e.key === "Backspace" && !code[index] && index > 0) {
			inputRefs.current[index - 1].focus();
		}
	};
	

    const {error,isLoading,verifyEmail} = useAuthStore()
	const handleSubmit = async (e) => {
		e.preventDefault();
		const verificationCode = code.join("");
		try {
			await verifyEmail(verificationCode);
			navigate("/");
			toast.success("Email verified successfully");
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		if (code.every((digit) => digit !== "")) {
			handleSubmit(new Event("submit"));
		}
	}, [code]);
  return (
    <div className="h-screen items-center flex  justify-center w-full Bg  bg-cover bg-top  bg-transparent   ">
     <div className='max-w-md py-2  w-full bg-orange-600  bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'>
			<motion.div
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className='bg-orange-500 bg-opacity-50 backdrop-filter rounded-2xl shadow-2xl p-8 w-full max-w-md'
			>
				<h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r text-white text-transparent bg-clip-text'>
					Verify Your Email
				</h2>
				<p className='text-center text-gray-300 font-bold  mb-6'>Enter the 6-digit code sent to your email address.</p>

				<form onSubmit={handleSubmit } className='space-y-6'>
					<div className='flex justify-between'>
						{code.map((digit, index) => (
							<input
								key={index}
								ref={(el) => (inputRefs.current[index] = el)}
								type='text'
								maxLength='6'
								value={digit}
								onChange={(e) => handleChange(index, e.target.value)}
								onKeyDown={(e) => handleKeyDown(index, e)}
								className='w-12 h-12 text-center text-2xl font-bold bg-w-700 text-black border-2 border-orange-600 rounded-lg focus:border-green-500 focus:outline-none'
							/>
						))}
					</div>
					{error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						type='submit'
						disabled={isLoading || code.some((digit) => !digit)}
						className='w-full  bg-white  text-black font-bold py-3 px-4 rounded-lg shadow-lg   '
					>
						{isLoading ? "Verifying..." : "Verify Email"}
					</motion.button>
				</form>
			</motion.div>
		</div>
    </div>
  )
}

export default EmailVerification