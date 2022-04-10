import React from "react";
import { getProviders, signIn as SingInToProvider } from "next-auth/react";
import Header from "../../components/Header";

const signIn = ({ providers }) => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center flex-col min-h-screen text-center py-2 -mt-56 px-14 ">
        <div className="w-80">
          <img src="https://links.papareact.com/ocw" alt="" />
        </div>
        <p>Bu gerçek İnstagram değildir. Eğitim projesi olarak yapılmıştır. </p>

        <div>
          {Object.values(providers).map((provider) => (
            <div className="mt-40 " key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-md text-white "
                onClick={() => SingInToProvider(provider.id, { callbackUrl: '/' } )}
              >
                {provider.name} İle Giriş Yap
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
export default signIn;
