import { ProfileProps } from "../types/profiles";

//service to recieve profiles data from GitHub API
export async function fetchProfile(name: string): Promise<ProfileProps | null> {
    try {
      const res = await fetch(`https://api.github.com/users/${name}`);
  
      if (!res.ok) return null;
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Erro ao buscar perfil", error);
      return null;
    }
  }
  