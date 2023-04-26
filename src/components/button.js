export default function LinkButton({label,href,icon}){
    icon = icon? <span className="text-left material-symbols-rounded font-light">{icon}</span> : "";
    return (
        <a href={href} className="border-[#201A18] dark:border-[#FFEEE2]
                                  hover:bg-[#201A18] hover:text-[#FFEEE2]
                                  focus:bg-[#201A18] focus:text-[#FFEEE2]
                                  hover:dark:bg-[#FFEEE2] hover:dark:text-[#201A18]
                                  focus:dark:bg-[#FFEEE2] focus:dark:text-[#201A18]
                                  flex justify-center border rounded py-1 w-[90%] m-auto
                                  transition duration-200 ease-in-out">
            <span className="flex gap-5">{icon}
                <p className="text-right">{label}</p>
            </span>
        </a>
    )
}

export function IconButton({href,icon, category}){
    if (category==='brands'){
        return (
            <a className="text-7xl hover:scale-105 transition duration-75 ease-in-out" href={href}>
                <i className={"fa-brands fa-" + icon}></i>
            </a>
        )
    } else if (category==='solid'){
        return (
            <a className="text-7xl hover:scale-105 transition duration-75 ease-in-out" href={href}>
                <i className={"fa-solid fa-" + icon}></i>
            </a>
        )

    }
}