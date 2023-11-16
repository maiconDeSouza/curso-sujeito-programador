import { Link } from "react-router-dom";
import { Social } from "../../components/Social/Social";
import { Youtube, Facebook, Instagram } from "lucide-react"
import { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

interface linksProps {
    id: string
    name: string
    url: string
    bg: string
    color: string
}

interface socialLinksProps {
    facebook: string
    instagram: string
    youtube: string
}

export function Home(){
    const [ links, setLinks ] = useState<linksProps[]>([])
    const [ socialLinks, setSocialLinks ] = useState<socialLinksProps>()

    useEffect(() => {
        async function loadingLinks(){
            const linksRef = collection(db, "links")
            const queryRef = query(linksRef, orderBy("created", "asc"))

            const snapshot = await getDocs(queryRef)
            let lista: linksProps[] = []

            snapshot.forEach(doc => {
                lista.push({
                    id: doc.id,
                    name: doc.data().name,
                    url: doc.data().url,
                    bg: doc.data().bg,
                    color: doc.data().color
                })
            })
            setLinks(lista)
        }
        loadingLinks()
    },[])

    useEffect(() => {   
        async function loadingNetworks(){
            const docRef = doc(db, "networks", "links")
            const snapshot = await getDoc(docRef)

            try {
                setSocialLinks({
                    facebook: snapshot.data()?.facebook,
                    instagram: snapshot.data()?.instagram,
                    youtube: snapshot.data()?.youtube
                })
            } catch (error) {
                console.log(error)
            }
        }
        loadingNetworks()
        
    },[])
    return (
        <div className="flex flex-col w-full py-4 items-center justify-center">
            <h1 className="md:text-4xl text-3xl font-bold text-white mt-20">Maicon Souza</h1>
            <span className="text-gray-50 mb-5 mt-3">Veja meus links 👇</span>
            <main className="flex flex-col w-11/12 max-w-xl">
                <nav >
                    <ul>
                        {
                            links.map(link => {
                                return (
                                    <li
                                        key={link.id} 
                                        className="mb-4 w-full py-2 rounded-lg select-none flex items-center justify-center transition-transform hover:scale-105 cursor-pointer"
                                        style={{backgroundColor: link.bg}}
                                    >
                                        <Link 
                                            target="_blank" 
                                            to={link.url} 
                                            style={{color: link.color}} 
                                            className="text-base md:text-lg"
                                            rel="noopener noreferrer"
                                        >
                                           {link.name}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
                <footer className="flex justify-center">
                    <ul className="flex justify-center items-center gap-3 my-4">
                        {
                            socialLinks?.facebook && socialLinks.facebook !== "" && (
                                <li>
                                    <Social url={socialLinks.facebook}>
                                        <Facebook size={35} color="#fff" />
                                    </Social>
                                </li>
                            )
                        }
                        {
                            socialLinks?.instagram && socialLinks.instagram !== "" && (
                                <li>
                                    <Social url={socialLinks.instagram}>
                                        <Instagram size={35} color="#fff" />
                                    </Social>
                                </li>
                            )
                        }
                        {
                            socialLinks?.youtube && socialLinks.youtube !== "" && (
                                <li>
                                    <Social url={socialLinks.youtube}>
                                        <Youtube size={35} color="#fff" />
                                    </Social>
                                </li>
                            )
                        }
                    </ul>
                </footer>
            </main>
        </div>
    )
}