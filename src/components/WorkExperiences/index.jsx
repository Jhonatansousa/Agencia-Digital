import './style.css'
import Card from '../Card'

const WorkExperiences = () => (
  <div className='workExperiencesSection'>
    <div className='workText'>
      <h1>Experiências De Trabalho</h1>
      <p>Há mais de 10 anos no mercado de Branding, Design Gráfico, Criação de Sites e Marketing Digital, nos empenhamos diariamente para entregar resultados que tragam impacto ao nossos clientes.</p>
    </div>
    <div className='cards'>
      <Card date='JUNHO 2012 - 2016'
        workspace='Web Designer'
        company='Pied Piper StartUp.'
        description='Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores.' />
      <Card date='AGOSTO 2016 - 2019'
        workspace='Product Designer'
        company='E Corp.'
        description='Criação de modelos estratégicos de conversão indentificando o cliente e mapeando toda a sua jornada de compra.' />
      <Card date='FEVEREIRO 2019 - 2021'
        workspace='Digital Consulting'
        company='Arasaka Inc.'
        description=' Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução.' />

    </div>
  </div>
)

export default WorkExperiences