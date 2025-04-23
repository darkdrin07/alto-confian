import React from "react";
import { Heart, Star, Eye, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";
import GlassCard from "@/components/GlassCard";
import TestimonialCard from "@/components/TestimonialCard";
import FAQAccordion from "@/components/FAQAccordion";
import BadgeRibbon from "@/components/BadgeRibbon";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const faqItems = [
    {
      question: "Como vou receber o produto?",
      answer: "Após a confirmação do pagamento, você receberá imediatamente um e-mail com instruções de acesso à área de membros, onde poderá baixar todos os materiais do método Eleve™.",
    },
    {
      question: "Em quanto tempo terei acesso?",
      answer: "O acesso é imediato após a confirmação do pagamento. Você poderá acessar todo o conteúdo em segundos.",
    },
    {
      question: "É seguro comprar aqui?",
      answer: "Absolutamente! Utilizamos os mais avançados sistemas de segurança para proteger suas informações. Suas informações financeiras são criptografadas e nunca armazenadas em nossos servidores.",
    },
    {
      question: "Por quanto tempo terei acesso?",
      answer: "Seu acesso é vitalício! Uma vez adquirido o método, você poderá acessá-lo sempre que desejar, sem mensalidades ou cobranças adicionais.",
    },
    {
      question: "Como funciona a garantia?",
      answer: "Oferecemos garantia de satisfação de 7 dias. Se você não estiver completamente satisfeita com o método, basta nos enviar um e-mail solicitando o reembolso, sem perguntas ou complicações.",
    },
  ];

  const today = new Date();
  const dataOferta = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth()+1).toString().padStart(2, '0')}/${today.getFullYear()}`;

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-16 pb-16 px-5 md:px-9 min-h-[70vh] flex flex-col justify-center items-center bg-black overflow-hidden">
        <div className="relative z-10 max-w-3xl w-full mx-auto flex flex-col items-center">
          <div className="flex justify-center items-center mb-2 gap-3">
            <h2 className="font-playfair font-bold text-xl md:text-2xl" style={{ color: "#fbd6e3" }}>
              Eleve
              <span className="mx-1" style={{ color: "#e9d8fd" }}>™: Despertar do Peitoral</span>
            </h2>
            <Heart className="ml-2" style={{ color: "#ff6f61" }} />
          </div>

          <h1
            className="font-spartan font-extrabold uppercase text-2xl md:text-4xl lg:text-5xl tracking-wide text-white mb-3 text-center leading-tight"
            style={{ fontFamily: "'League Spartan', Arial, sans-serif" }}
          >
            <span>
              <span className="text-[#ea384c] font-extrabold">
                Recupere a firmeza natural
              </span>
              {" "}sua postura e sua confiança em 21 dias
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-4 max-w-2xl mx-auto font-poppins text-center">
            Método feminino, sem academia, sem cirurgias, resultados reais para o seu alto — com leveza.
          </p>

          <div className="w-full flex justify-center mb-5">
            <img 
              src="/lovable-uploads/6f2daa40-e885-4661-a5c3-ca0df16d49bd.png"
              alt="Antes e depois Eleve"
              className="rounded-xl max-w-xs shadow-lg border-4 border-eleveLavanda"
            />
          </div>

          <div className="mt-2 flex flex-col items-center gap-2 w-full mb-4">
            <span className="text-white text-base md:text-lg">
              De{" "}
              <span className="text-red-500 font-bold line-through text-lg md:text-2xl">R$ 97,00</span>
              {" "}por
            </span>
            <span className="text-[2.2rem] md:text-5xl font-extrabold bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 bg-clip-text text-transparent tracking-wide drop-shadow-lg">
              APENAS R$ 10
            </span>
          </div>

          <div className="my-2 w-full flex flex-col items-center">
            <CTAButton
              size="lg"
              variant="primary"
              className="uppercase bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 hover:from-purple-800 hover:to-pink-600 text-white border-none font-bold text-lg px-10 py-3 shadow-xl rounded-full transition-all"
              onClick={() => scrollToSection("pricing")}
            >
              Quero começar minha transformação agora!
            </CTAButton>
          </div>

          <div className="mt-5 flex justify-center">
            <img
              src="/lovable-uploads/22144477-c6e1-4e97-9eb7-5b5c25dc2015.png"
              alt="Compra Segura, Satisfação Garantida, Privacidade Protegida"
              className="max-h-12 w-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <AnimatedSection className="py-16 px-5 md:px-10 lg:px-20 bg-eleveLavanda/90">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair font-bold text-2xl md:text-3xl lg:text-4xl mb-6 text-gray-800">
            Sabe quando evita abraços apertados ou usar uma blusa mais soltinha porque sente que seu seio não está mais no lugar? 
          </h2>
          <p className="text-lg text-gray-700 md:text-xl leading-relaxed">
            O desconforto de vestir um sutiã e ver o alto não preencher mais como antes, de não se sentir “segura” nas fotos ou encontros, faz parte da rotina de muitas mulheres — e não tem nada a ver com vaidade. É sobre identificação. E é possível mudar isso com respeito ao seu corpo!
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 px-5 md:px-10 lg:px-20 bg-eleveNude">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <img
              src="/lovable-uploads/6f2daa40-e885-4661-a5c3-ca0df16d49bd.png"
              alt="Conteúdo Eleve™"
              className="rounded-2xl shadow-lg max-w-xs border-4 border-eleveRosa"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-spartan font-bold mb-4 text-eleveCoral">Sobre o Método Eleve™</h2>
            <ul className="list-disc ml-5 mb-4 text-gray-700 space-y-2">
              <li><b>O que é?</b> Um método exclusivo de exercícios e autocuidado projetado para mulheres que desejam valorizar a região do alto, recuperar firmeza e a própria autoestima, sem procedimentos invasivos.</li>
              <li><b>O que contém?</b> PDF completo, passo a passo, cronograma de 21 dias, ilustrações práticas, além de bônus no plano Premium.</li>
              <li><b>Benefícios:</b> Firmeza natural, postura melhorada, confiança ao se vestir, mais autoestima.</li>
              <li><b>Como funciona?</b> Exercícios diários rápidos, práticos e sem equipamentos, podendo ser feitos no conforto de casa e adaptados à sua rotina.</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 rounded-full bg-eleveLavanda text-eleveCoral font-semibold shadow">Acesso vitalício</span>
              <span className="px-3 py-1 rounded-full bg-eleveLavanda text-eleveCoral font-semibold shadow">Transforme seu alto em 21 dias</span>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 px-5 md:px-10 lg:px-20 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair font-bold text-2xl md:text-3xl lg:text-4xl mb-8 text-center text-gray-800">
            Mas será que isso é pra mim?
          </h2>
          <div className="space-y-6">
            <div className="bg-eleveNude rounded-lg p-5 shadow-sm">
              <h3 className="font-medium text-lg mb-2">Preciso de academia?</h3>
              <p className="text-gray-700">Nada disso. Você pode fazer tudo em casa, de forma discreta.</p>
            </div>
            <div className="bg-eleveNude rounded-lg p-5 shadow-sm">
              <h3 className="font-medium text-lg mb-2">Tenho pouco tempo...</h3>
              <p className="text-gray-700">Criado para mulheres reais: rápido, leve e direto.</p>
            </div>
            <div className="bg-eleveNude rounded-lg p-5 shadow-sm">
              <h3 className="font-medium text-lg mb-2">Já tentei outras coisas…</h3>
              <p className="text-gray-700">Este não é um curso. É um ritual diário de 21 dias, com resultados progressivos.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 px-5 md:px-10 lg:px-20 bg-eleveRosa/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair font-bold text-2xl md:text-3xl lg:text-4xl mb-8 text-center text-gray-800">
            Um método pensado para valorizar o que você já tem.
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="w-full md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                alt="Criadora do método Eleve" 
                className="rounded-full w-48 h-48 object-cover mx-auto shadow-md border-4 border-eleveRosa"
              />
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-gray-700 mb-4">
                Olá, sou Ana, criadora do método Eleve™. Desenvolvi este programa após anos ajudando mulheres a recuperarem sua confiança e autoestima através de técnicas naturais e eficazes.
              </p>
              <p className="text-gray-700">
                Meu propósito é ajudar você a redescobrir sua beleza natural, com foco na saúde e no bem-estar emocional, não em padrões estéticos impossíveis ou procedimentos invasivos.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="font-playfair font-bold text-xl mb-4">O que você vai receber:</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-eleveCoral text-white flex items-center justify-center mr-3 flex-shrink-0">✓</div>
                  <p>PDF completo com o método Eleve™</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-eleveCoral text-white flex items-center justify-center mr-3 flex-shrink-0">✓</div>
                  <p>Cronograma de 21 dias</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-eleveCoral text-white flex items-center justify-center mr-3 flex-shrink-0">✓</div>
                  <p>Ilustrações práticas e simples</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-playfair font-bold text-xl mb-4">
                Bônus especiais <span className="text-eleveCoral font-semibold">(exclusivos no plano Premium)</span>:
              </h3>
              <div className="space-y-3 opacity-80">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-eleveCoral text-white flex items-center justify-center mr-3 flex-shrink-0">🎁</div>
                  <p>Diário da Autoimagem</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-eleveCoral text-white flex items-center justify-center mr-3 flex-shrink-0">🎁</div>
                  <p>Audioguia da Confiança</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-eleveCoral text-white flex items-center justify-center mr-3 flex-shrink-0">🎁</div>
                  <p>Mini Guia Estético</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-eleveCoral text-white flex items-center justify-center mr-3 flex-shrink-0">🎁</div>
                  <p>Checklist de Rotina</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-eleveCoral text-white flex items-center justify-center mr-3 flex-shrink-0">🎁</div>
                  <p>Acesso a grupo de suporte no Telegram (opcional)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="pricing" className="py-16 px-5 md:px-10 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair font-bold text-2xl md:text-3xl lg:text-4xl mb-12 text-center text-gray-800">
            Comece no seu ritmo:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 relative">
            <div className="relative">
              <GlassCard className="bg-gray-100 border border-gray-300 shadow-sm">
                <div className="text-center mb-6">
                  <h3 className="font-playfair font-bold text-2xl mb-2 text-gray-700">Eleve Essencial™</h3>
                  <div className="text-3xl font-bold text-gray-500 mb-4">R$10</div>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-gray-400 text-white flex items-center justify-center mr-3 flex-shrink-0 text-xs">✓</div>
                    <p>Método em PDF</p>
                  </div>
                  <div className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-gray-400 text-white flex items-center justify-center mr-3 flex-shrink-0 text-xs">✓</div>
                    <p>Cronograma de 21 dias</p>
                  </div>
                  <div className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-gray-400 text-white flex items-center justify-center mr-3 flex-shrink-0 text-xs">✓</div>
                    <p>Acesso vitalício</p>
                  </div>
                </div>
                <CTAButton
                  fullWidth
                  variant="outline"
                  className="bg-gray-200 text-gray-600 border-gray-400 hover:bg-gray-300 font-medium rounded-lg"
                >
                  Quero Começar Agora
                </CTAButton>
              </GlassCard>
            </div>
            <div className="relative">
              <BadgeRibbon>Mais vendido</BadgeRibbon>
              <GlassCard className="border-2 border-eleveCoral bg-gradient-to-tr from-eleveRosa via-eleveLavanda to-white animate-fade-in shadow-lg">
                <div className="text-xs mb-2 text-red-600 font-bold uppercase">
                  Esta promoção só é válida até o dia {dataOferta}
                </div>
                <div className="text-center mb-6">
                  <h3 className="font-playfair font-bold text-2xl mb-2 text-eleveCoral">Eleve Premium™</h3>
                  <div className="text-3xl font-bold text-eleveCoral mb-4">R$19,90</div>
                </div>
                <div className="font-medium mb-2">Tudo do Essencial +</div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-eleveCoral text-white flex items-center justify-center mr-3 flex-shrink-0 text-xs">🎁</div>
                    <p>Diário da Autoimagem</p>
                  </div>
                  <div className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-eleveCoral text-white flex items-center justify-center mr-3 flex-shrink-0 text-xs">🎁</div>
                    <p>Checklist de Rotina</p>
                  </div>
                  <div className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-eleveCoral text-white flex items-center justify-center mr-3 flex-shrink-0 text-xs">🎁</div>
                    <p>Audioguia da Confiança</p>
                  </div>
                  <div className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-eleveCoral text-white flex items-center justify-center mr-3 flex-shrink-0 text-xs">🎁</div>
                    <p>Mini Guia Estético</p>
                  </div>
                  <div className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-eleveCoral text-white flex items-center justify-center mr-3 flex-shrink-0 text-xs">🎁</div>
                    <p>Acesso ao grupo de suporte no Telegram</p>
                  </div>
                </div>
                <CTAButton
                  fullWidth
                  size="lg"
                  className="bg-eleveCoral hover:bg-eleveCoral/90 text-white font-bold shadow-lg text-lg border-none rounded-lg"
                >
                  Quero a Experiência Completa
                </CTAButton>
              </GlassCard>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 px-5 md:px-10 lg:px-20 bg-eleveLavanda/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair font-bold text-2xl md:text-3xl lg:text-4xl mb-10 text-center text-gray-800">
            Mulheres reais, resultados reais:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              name="Mariana S."
              text="Comecei o método há 3 semanas e já estou usando roupas que ficavam no fundo do armário. A melhor parte é que posso fazer tudo em casa, sem precisar de equipamentos!"
              className="p-6"
              rating={5}
              avatarUrl="https://randomuser.me/api/portraits/women/44.jpg"
            />
            <TestimonialCard
              name="Camila R."
              text="O que mais gostei foi a praticidade. São apenas alguns minutos por dia e os resultados aparecem gradualmente. Minha postura melhorou muito também."
              className="p-6"
              rating={5}
              avatarUrl="https://randomuser.me/api/portraits/women/65.jpg"
            />
            <TestimonialCard
              name="Juliana F."
              text="Por anos evitei certos tipos de roupa. Com o método Eleve, recuperei minha confiança e os exercícios são super tranquilos de fazer. Recomendo demais!"
              className="p-6"
              rating={5}
              avatarUrl="https://randomuser.me/api/portraits/women/68.jpg"
            />
          </div>
          <div className="mt-12 text-center">
            <p className="italic text-gray-600 mb-4">"Os resultados variam de pessoa para pessoa. O método busca valorizar sua beleza natural através de exercícios leves e práticas de autocuidado."</p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 px-5 md:px-10 lg:px-20 bg-eleveNude">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair font-bold text-2xl md:text-3xl lg:text-4xl mb-8 text-gray-800">
            Não é sobre aparência. É sobre se reencontrar.
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
            <p className="text-lg italic text-gray-700 mb-4">
              "Antes, eu evitava fotos e roupas que mostrassem o alto. Hoje, me olho no espelho e sorrio. Não é mágica. É método."
            </p>
            <p className="font-medium">- Paula, 42 anos</p>
          </div>
          <div className="mt-8">
            <img 
              src="https://images.unsplash.com/photo-1500673922987-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Transformação" 
              className="rounded-xl shadow-lg max-w-full h-auto mx-auto"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 px-5 md:px-10 lg:px-20 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="border-2 border-eleveCoral rounded-xl p-6 mb-10 max-w-xl mx-auto">
            <svg className="h-12 w-12 mx-auto mb-4 text-eleveCoral" fill="none" viewBox="0 0 48 48" stroke="currentColor">
              <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3" fill="#fbd6e3"/>
              <path d="M18 26l6 6 10-12" stroke="#ff6f61" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 className="font-playfair font-bold text-xl mb-4">
              Satisfação ou dinheiro de volta em até 7 dias. Sem perguntas.
            </h3>
            <p className="text-gray-700">
              Acreditamos tanto no método que oferecemos garantia total. Se não estiver satisfeita, devolvemos seu investimento integralmente.
            </p>
          </div>
          <CTAButton
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-full px-10 py-4 text-lg shadow-lg border-none"
            onClick={() => scrollToSection("pricing")}
          >
            Quero Começar Agora – por R$10 ou R$19,90
          </CTAButton>
          <p className="mt-6 text-gray-700 italic">
            "Você já se deixou por último por tempo demais. Agora é hora de escolher você."
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 px-5 md:px-10 lg:px-20 bg-eleveLavanda/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair font-bold text-2xl md:text-3xl mb-8 text-center text-gray-800">
            Perguntas Frequentes
          </h2>
          <FAQAccordion items={faqItems} className="bg-white rounded-xl p-6" />
        </div>
      </AnimatedSection>

      <footer className="py-10 px-5 md:px-10 bg-gray-100 text-gray-700">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-6 md:mb-0">
              <h3 className="font-playfair font-bold text-lg mb-3">Eleve™</h3>
              <p className="text-sm">Método de autoestima e autocuidado feminino</p>
            </div>
            <div>
              <h4 className="font-medium mb-3">Contato</h4>
              <p className="text-sm mb-1">Suporte: suporte@eleve.com.br</p>
              <p className="text-sm">WhatsApp: (11) 99999-9999</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-300 pt-6">
            <div className="text-sm mb-4 md:mb-0">
              <a href="#" className="mr-4 hover:text-eleveCoral">Termos de uso</a>
              <a href="#" className="hover:text-eleveCoral">Política de privacidade</a>
            </div>
            <div className="text-sm text-gray-600">
              Copyright © 2025 – Projeto Eleve™
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
