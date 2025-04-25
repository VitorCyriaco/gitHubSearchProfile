//Box to show profile not found
export function NotFound(){
    return(
        <div className="flex flex-col bg-[#d9d9d9] w-[710px] h-[88px] rounded-2xl items-center justify-center">
            <p className="text-[#ff0000] text-[20px]">Nenhum perfil foi encontrado com ese nome de usuário.</p>
            <p className="text-[#ff0000] text-[20px]">Tente novamente</p>
        </div>
    )
}