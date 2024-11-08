

const Button = ({ButtonText}: {ButtonText:string}) => {
  return (
    <div>
       <button className="absolute bottom-[20px]  left-[20px]  bg-white text-[#e43c13] px-3 py-1  text-[14px] rounded-full">
                    {ButtonText}
                </button>
    </div>
  )
}

export default Button
