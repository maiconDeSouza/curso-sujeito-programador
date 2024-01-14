export function Cardcar() {
  return (
    <article className="w-full bg-white rounded-lg">
      <img
        src="https://s2-autoesporte.glbimg.com/iQ3dI3Epc-vUNW3S8pkkXqL-A5Y=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/t/A/NooOV9Q9KfHpyLb3hWag/2019-04-05-chevrolet-sonic.jpeg"
        alt=""
        className="w-full max-h-72 rounded-lg mb-2 hover:scale-105 transition-all duration-300"
      />
      <h3 className="font-bold mt-1 mb-2 px-2">Sonic Chevrolet</h3>
      <div className="flex flex-col px-2">
        <span className="text-zinc-700 mb-6">Ano 2016/2016 | 23.000 km</span>
        <strong className="text-black font-medium text-xl">R$ 19.000,00</strong>
      </div>
      <hr className="my-2" />
      <div className="px-2 pb-2 ">
        <span className="text-zinc-700">São Paulo - SP</span>
      </div>
    </article>
  )
}
