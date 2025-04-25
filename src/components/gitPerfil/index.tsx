import { ProfileProps } from "../../types/profiles"

//Box to show profile info
export function GitHubProfile({data}: {data: ProfileProps}) {

    return (
        <div className="flex bg-[#d9d9d9] w-[804px] h-[257px] rounded-2xl items-center px-8">
            <div className="flex border-2 border-[#005eff] w-[220px] h-[220px] rounded-full">
                <img className="w-full h-full object-cover rounded-full" src={data.avatar_url} alt={data.name} />
            </div>
            <div className="w-3/5 ml-8">
                <h3 className="text-[#005eff] text-[20px] font-[700] mb-5">{data.name || data.login}</h3>
                <p className="text-[15px] font-[300]">{data.bio || "Perfil sem bio"}</p>
            </div>
        </div>
    )
}