import { MessageCircle, Instagram } from "lucide-react";
import Header from "@layouts/header/header.jsx";
import { useEffect, useState, useContext } from "react";
import Footer from "@layouts/footer/footer.jsx";
import AppContext from "@context/app-context";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";

export default function ContactPage() {
  const context = useContext(AppContext);
  const urlApi = context.urlApi;
  const apiKey = context.apiKey;

  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Message, setMessage] = useState();

  const socialLinks = [
    {
      name: "Facebook",
      icon: <MessageCircle className="h-5 w-5" />,
      href: "https://wa.me/573118345217/?text=Hola...",
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      href: "https://www.instagram.com/d10.col/",
    },
  ];

  const [sectionOne, setSectionOne] = useState({
    title: "",
    bg_photo: "",
    subtitle: "",
  });

  function getDataContact() {
    axios
      .get(`${urlApi}landing/g/contact`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      })
      .then((response) => {
        setSectionOne(response.data[0].section_one);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function postEmailContact() {
    toast.promise(
      axios
        .post(
          `${urlApi}landing/i/mail-contact`,
          {
            name: Name,
            email: Email,
            message: Message,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "api-key": apiKey,
            },
          }
        )
        .then((response) => {
          if (response.data.success) {
            setName("");
            setEmail("");
            setMessage("");
            return "Correo enviado con éxito";
          } else {
            throw new Error(
              "Error al enviar el correo: " + response.data.message
            );
          }
        }),
      {
        loading: "Enviando correo...",
        success: (msg) => msg,
        error: (err) => err.message || "Error en el envió de correo",
      }
    );
  }

  useEffect(() => {
    getDataContact();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header dataHeader={context.dataHeader} />

      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <h1 className="mb-12 text-center text-4xl font-bold tracking-tight md:text-8xl">
              {sectionOne.title}
            </h1>

            <section className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Nombre
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-zinc-700 bg-zinc-900 text-white placeholder:text-zinc-500 focus:border-white"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Nombre"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                  required=""
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-zinc-700 bg-zinc-900 text-white placeholder:text-zinc-500 focus:border-white"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@example.com"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  required=""
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Mensaje
                </label>
                <textarea
                  className="flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-zinc-700 bg-zinc-900 text-white placeholder:text-zinc-500 focus:border-white"
                  id="message"
                  name="message"
                  placeholder="Mensaje..."
                  value={Message}
                  onChange={(e) => setMessage(e.target.value)}
                  required=""
                  rows="6"
                ></textarea>
              </div>
              <div>
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 group w-full border border-white bg-transparent hover:bg-white hover:text-black"
                  onClick={() => postEmailContact()}
                >
                  <span className="flex items-center justify-center">
                    Enviar
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-send ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z"></path>
                      <path d="M22 2 11 13"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </section>

            {/* Divisor */}
            <div className="my-12 flex items-center justify-center">
              <div className="h-px w-16 bg-zinc-700"></div>
              <span className="mx-4 text-sm text-zinc-500">
                {sectionOne.subtitle}
              </span>
              <div className="h-px w-16 bg-zinc-700"></div>
            </div>

            {/* Redes */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                  aria-label={link.name}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
