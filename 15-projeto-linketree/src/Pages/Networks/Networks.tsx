import { FormEvent, useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

export function Networks(){
    const [ facebook, setfacebook ] = useState("")
    const [ instagram, setInstagram ] = useState("")
    const [ youtube, setYoutube ] = useState("")

    useEffect(() => {
        async function loding(){
            const docRef = doc(db, "networks", "links")
            const snapshot = await getDoc(docRef)

            if(snapshot.data()){
                setfacebook(snapshot.data()?.facebook)
                setInstagram(snapshot.data()?.instagram)
                setYoutube(snapshot.data()?.youtube)
            }
        }

        loding()
    }, [])

    async function handleRegister(e:FormEvent){
        e.preventDefault()

        try {
            await setDoc(doc(db, "networks", "links"), {
                facebook,
                instagram,
                youtube
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header />

            <h1 className="text-white text-2xl font-medium mt-8 mb-4">Minhas redes Sociais</h1>

            <form className="flex flex-col gap-3 max-w-xl w-full" onSubmit={handleRegister}>
                <label htmlFor="facebook" className="text-white font-medium">Link do Facebook</label>
                <Input
                    type="url" 
                    placeholder="digite a url do facebook..."
                    value={facebook}
                    onChange={(e) => setfacebook(e.target.value)}
                />
                <label htmlFor="facebook" className="text-white font-medium">Link do Instagram</label>
                <Input
                    type="url" 
                    placeholder="digite a url do instagram..."
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                />
                <label htmlFor="facebook" className="text-white font-medium ">Link do Youtube</label>
                <Input
                    type="url" 
                    placeholder="digite a url do youtube..."
                    value={youtube}
                    onChange={(e) => setYoutube(e.target.value)}
                />
                <button 
                    type="submit" 
                    className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium"
                >
                    Salvar Links
                </button>
            </form>
        </div>
    )
}