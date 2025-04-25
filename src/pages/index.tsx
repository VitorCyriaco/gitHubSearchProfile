import { useEffect, useState } from "react";
import { Background } from "../components/background/background";
import { GitHubProfile } from "../components/gitPerfil";
import { NotFound } from "../components/gitPerfil/notFound";
import { fetchProfile } from "../services/fetchProfile";
import { ProfileProps } from "../types/profiles";

export default function Home() {

    const [inputValue, setInputValue] = useState(""); //search button state
    const [profileName, setProfileName] = useState(""); //input name state
    const [profileData, setProfileData] = useState<ProfileProps | null>(); //profile data state
    const [isLoading, setIsLoading] = useState(false); //loading state


    //funtion to pass username and recieve profiles data from Profiles Service
    useEffect(() => {
        const profilesData = async () => {
            setIsLoading(true);
    
            try {
                const data = await fetchProfile(profileName);
    
                setProfileData(data);
            } catch (e) {
                setProfileData(null);
            } finally {
                setIsLoading(false);
            }
    
        }

        if (profileName) {
            profilesData();
        }
    }, [profileName]);


    //function to accept enter press in search input
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setProfileName(inputValue);
    };
}


    return (
        <>
            <div className="w-full h-full z-0">
                <Background />
            </div>
            <div className="flex w-full h-full justify-center z-30">
                <div className="fixed bg-[#000000] w-[1156px] h-[537px] top-[137px] z-30">
                    <div className="flex justify-center mt-[39px]">
                        <img src="src/assets/img/github-logo.png" alt="github logo" />
                    </div>
                    <div className="flex relative justify-center mt-6">
                        <button className="flex absolute border-1 border-[#dddddd] right-[28.2%] w-[62px] h-[62px] bg-[#005eff] items-center justify-center rounded-xl"
                            onClick={() => setProfileName(inputValue)}
                        >
                            <img className="w-[25px] h-[25px]" src="src/assets/img/search-icon.png" alt="search-icon" />
                        </button>
                        <input className="border-1 border-[#dddddd] bg-white w-[503px] h-[62px] rounded-xl text-[20px] font-[600] p-2 pb-3 pr-20"
                            type="text"
                            placeholder="Digite um usuário do Github"
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyPress}
                        />
                    </div>

                    {isLoading && (
                        <div className="flex mt-10 justify-center z-50">
                            <div className="w-12 h-12 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                        </div>
                    )}

                    {!isLoading && profileData === null && (
                        <div className="flex mt-8 justify-center">
                            <NotFound />
                        </div>
                    )}

                    {!isLoading && profileData && (
                        <div className="flex mt-8 justify-center">
                            <GitHubProfile data={profileData} />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}