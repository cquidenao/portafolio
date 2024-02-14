import Layout from "../components/Layout";
import Link from "next/link";

import { skills, experiences, projects } from "../profile";

const Index = () => (
  <Layout>
    {/* Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
          <div className="row">
            <div className="col-md-4">
              <img src="/cata.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Catalina Quidenao</h1>
              <h3>Full Stack</h3>
              <p>
                Me interesa crear experiencias digitales y resolver problemas del mundo real a través de código.
                Actualmente estoy aprendiendo los entresijos del desarrollo full-stack, sumergiéndome en tecnologías tanto frontend como backend.
                Busco colaborar en proyectos de código abierto o cualquier cosa que me desafíe a crecer como desarrollador.
                Cómo comunicarse conmigo: no dude en enviarme un mensaje aquí en GitHub o comunicarse a través de capquidenao@gmail.com.
              </p>
              <Link href="/hireme" className="btn btn-outline-light">
                cv
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Second section */}

    <section className="row">
      <div className="col-md-12 py-2">
        <div className="card bg-secondary animate__animated animate__fadeInLeft">
          <div className="card-body">
            <h1 className="text-center">Skills</h1>

            {/* Skill Progress  */}
            {skills.map(({ skill }, i) => (
              <div className="py-0" key={i}>
                <h3 className="text-justify">{skill}</h3>
              </div>
            ))}
          </div>
          </div>
          </div>
    </section>
    {/* Portafolio */}
    <section>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-secondary">
            <div className="row">
              <div className="col-md-12 my-2">
                <h1 className="text-center text-light">Portafolio</h1>
              </div>
              {projects.map(({ name, description, image }, index) => (
                <div className="col-md-4 p-2" key={index}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img src={`/${image}`} alt="" className="card-img-top" />
                    </div>
                    <div className="card-body">
                      <h3>{name}</h3>
                      <p>{description}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-md-12 mt-4">
                <div className="text-center">
                  <Link href="/portfolio" className="btn btn-outline-light">
                    Mas proyectos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
