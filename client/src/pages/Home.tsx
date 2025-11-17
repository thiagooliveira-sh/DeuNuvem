import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Cloud,
  Code2,
  Zap,
  Shield,
  TrendingUp,
  Server,
  Github,
  Linkedin,
  Youtube,
  Award,
  CheckCircle2,
} from "lucide-react";

export default function Home() {
  const certifications = [
    "AWS Certified Security – Specialty",
    "AWS Certified Solutions Architect – Professional",
    "AWS Certified DevOps Engineer – Professional",
    "AWS Certified Solutions Architect – Associate",
    "AWS Certified Developer – Associate",
    "AWS Certified SysOps Administrator – Associate",
    "AWS Certified Cloud Practitioner",
    "AWS Certified AI Practitioner",
    "HashiCorp Terraform Associate",
  ];

  const topics = [
    {
      icon: Cloud,
      title: "AWS Services",
      description:
        "Explore em detalhes os serviços da AWS, incluindo EC2, ECS, EKS, RDS, S3, Lambda e muito mais. Aprenda as melhores práticas de arquitetura e otimização.",
    },
    {
      icon: Zap,
      title: "DevOps & CI/CD",
      description:
        "Explore a integração contínua, a implantação contínua e a cultura DevOps. Domine ferramentas como Jenkins, GitLab CI e Atlantis.",
    },
    {
      icon: Code2,
      title: "Infrastructure as Code",
      description:
        "Aprenda Terraform, CloudFormation e Ansible para automatizar sua infraestrutura e seguir os princípios do GitOps.",
    },
    {
      icon: Server,
      title: "Kubernetes & Containers",
      description:
        "Desde os conceitos básicos do Docker até tópicos avançados do Kubernetes. Compreenda a orquestração de contêineres, service meshes e Helm charts.",
    },
    {
      icon: Shield,
      title: "Cloud Security",
      description:
        "Melhores práticas de segurança, políticas de IAM, criptografia, conformidade e como proteger sua infraestrutura em nuvem.",
    },
    {
      icon: TrendingUp,
      title: "FinOps & Cost Optimization",
      description:
        "Otimize seus gastos com nuvem, entenda a alocação de custos e implemente práticas de FinOps. Exemplos reais de economia anual superior a 200 mil dólares.",
    },
  ];

  const expertise = [
    {
      category: "Cloud Architecture",
      items: [
        "Gerenciamento de Infraestrutura em Nuvem AWS",
        "Modernização com recursos nativos da nuvem",
        "Design de soluções escaláveis ​​e confiáveis",
      ],
    },
    {
      category: "Infrastructure as Code",
      items: ["Terraform (certified)", "Crossplane", "CloudFormation", "Ansible"],
    },
    {
      category: "DevOps & Automation",
      items: [
        "CI/CD: Jenkins, GitLab CI, Atlantis",
        "Containers: Docker, Kubernetes, AWS EKS, Helm, Istio",
        "Scripting: Bash, Python",
        "Práticas de GitOps",
      ],
    },
    {
      category: "Observability & Security",
      items: [
        "Prometheus, Grafana",
        "HashiCorp Vault",
        "Melhores práticas de segurança para cloud",
        "IAM, SCPs, Resource Policies",
        "FinOps and Cost Optimization",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Cloud className="w-6 h-6 text-accent" />
            <span className="text-xl font-bold text-foreground">Deu Nuvem</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-sm text-foreground hover:text-accent transition">
              Sobre
            </a>
            <a href="#topicos" className="text-sm text-foreground hover:text-accent transition">
              Tópicos
            </a>
            <a href="#certificacoes" className="text-sm text-foreground hover:text-accent transition">
              Certificações
            </a>
            <a href="#contato" className="text-sm text-foreground hover:text-accent transition">
              Contato
            </a>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-white">
            <a href="https://www.youtube.com/@DeuNuvem" target="_blank" rel="noopener noreferrer">
              Inscrever-se
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-orange-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-hero mb-6 text-foreground">Cloud Computing Sem Neblina</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Tudo sobre AWS, DevOps, Infraestrutura e SysAdmin. Conteúdo técnico profundo, sem complicação.
            </p>
            <p className="text-base md:text-lg text-foreground mb-12 max-w-2xl mx-auto">
              Bem-vindo ao Deu Nuvem, o canal onde a gente fala sobre Cloud Computing de um jeito leve, direto e sem
              complicação. Aqui você vai encontrar desde dicas práticas do dia a dia até discussões sobre arquitetura,
              DevOps, segurança, automação e muito mais!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white"
                asChild
              >
                <a href="https://www.youtube.com/@DeuNuvem" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-5 h-5 mr-2" />
                  Inscrever-se no YouTube
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#topicos">Explorar Conteúdo</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-section-title mb-8 text-foreground">Quem Sou</h2>
            <div className="space-y-6 text-foreground">
              <p className="text-lg leading-relaxed">
                DevOps Engineer com mentalidade de problem-solver, orientado ao cliente e com forte pensamento crítico.
                Minha experiência em Support Engineering me equipou com uma habilidade natural para troubleshoot
                problemas complexos em sistemas distribuídos e resolver incidentes críticos rapidamente.
              </p>
              <p className="text-lg leading-relaxed">
                Como Senior Engineer, meu foco é antecipar falhas de sistema, revisar mudanças de código, mentorizar
                engenheiros juniores, desenhar soluções escaláveis e confiáveis, e colaborar de perto com
                desenvolvedores para melhorar workflows e resultados.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-8 border-t border-border">
                <div>
                  <p className="font-semibold text-accent mb-2">7+ anos de experiência</p>
                  <p className="text-muted-foreground">Em Cloud Computing e DevOps</p>
                </div>
                <div>
                  <p className="font-semibold text-accent mb-2">20+ profissionais mentorados</p>
                  <p className="text-muted-foreground">Em Cloud e DevOps</p>
                </div>
                <div>
                  <p className="font-semibold text-accent mb-2">5+ certificações AWS</p>
                  <p className="text-muted-foreground">Incluindo Professional level</p>
                </div>
                <div>
                  <p className="font-semibold text-accent mb-2">$200k+ em economia</p>
                  <p className="text-muted-foreground">Através de FinOps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <h2 className="text-section-title mb-12 text-foreground text-center">Minha Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((exp, idx) => (
              <Card key={idx} className="p-6 border-border">
                <h3 className="text-subsection mb-4 text-foreground">{exp.category}</h3>
                <ul className="space-y-3">
                  {exp.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certificacoes" className="section-padding bg-white">
        <div className="container">
          <h2 className="text-section-title mb-12 text-foreground text-center">Certificações AWS</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section id="topicos" className="section-padding bg-slate-50">
        <div className="container">
          <h2 className="text-section-title mb-12 text-foreground text-center">Tópicos que Cobrimos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, idx) => {
              const IconComponent = topic.icon;
              return (
                <Card key={idx} className="p-6 border-border hover:border-accent hover:shadow-lg transition">
                  <IconComponent className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-subsection mb-3 text-foreground">{topic.title}</h3>
                  <p className="text-foreground text-sm leading-relaxed">{topic.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-section-title mb-6 text-foreground">Artigos Técnicos</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Acompanhe meus artigos técnicos detalhados sobre Cloud Computing, DevOps e Infraestrutura no meu blog
              pessoal.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white"
              asChild
            >
              <a href="https://thiagoalexandria.com.br" target="_blank" rel="noopener noreferrer">
                Visite o Blog
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-section-title mb-6 text-white">Pronto para Aprender?</h2>
            <p className="text-lg text-blue-50 mb-8">
              Inscreva-se no canal Deu Nuvem e não perca nenhum vídeo sobre AWS, DevOps, Infraestrutura e muito mais.
              Conteúdo novo toda semana!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white hover:bg-slate-100 text-blue-600 font-semibold"
                asChild
              >
                <a href="https://www.youtube.com/@DeuNuvem" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-5 h-5 mr-2" />
                  Inscrever-se no YouTube
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <a href="https://www.linkedin.com/in/thiago-alexandria" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  Siga no LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="section-padding-sm bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-section-title mb-8 text-foreground">Conecte-se Comigo</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a
                href="https://www.youtube.com/@DeuNuvem"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground hover:text-accent transition"
              >
                <Youtube className="w-5 h-5" />
                YouTube
              </a>
              <a
                href="https://www.linkedin.com/in/thiago-alexandria"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground hover:text-accent transition"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground hover:text-accent transition"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="mailto:thiagoo_oa@hotmail.com"
                className="flex items-center gap-2 text-foreground hover:text-accent transition"
              >
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="mb-2">
              © 2025 Deu Nuvem. Todos os direitos reservados.
            </p>
            <p className="text-sm">
              Feito com ❤️ por Thiago Alexandria
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
