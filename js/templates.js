// js/templates.js

export const templates = {
    home: `
        <section id="hero" class="section-padding">
            <div class="grid-container align-items-center">
                <div class="col-12 col-md-6 text-center">
                    <h1>Seja a Mudança que Você Quer Ver no Mundo</h1>
                    <p class="section-description">
                        Junte-se ao Projeto Abraço e faça a diferença. Nossas ações transformam vidas e comunidades.
                    </p>
                    <a href="#projetos" class="btn btn-primary btn-large">Nossos Projetos</a>
                    <a href="#cadastro" class="btn btn-secondary btn-large">Seja Voluntário</a>
                </div>
                <div class="col-12 col-md-6 text-center">
                    <img src="img/banner_principal.png" alt="Grupo de pessoas diversas abraçando um globo terrestre" class="responsive-image section-image">
                </div>
            </div>
        </section>

        <section id="about" class="section-padding section-light-bg">
            <div class="grid-container align-items-center">
                <div class="col-12 col-md-6">
                    <img src="img/sobre_nos.png" alt="Mãos de diferentes pessoas unidas em sinal de cooperação" class="responsive-image section-image">
                </div>
                <div class="col-12 col-md-6">
                    <h2>Sobre o Projeto Abraço</h2>
                    <p>
                        Somos uma organização dedicada a promover o bem-estar e o desenvolvimento social em comunidades carentes. Acreditamos que através da educação, saúde e apoio comunitário, podemos construir um futuro mais justo e equitativo para todos.
                    </p>
                    <p>
                        Desde a nossa fundação em 2015, já impactamos milhares de vidas, com a ajuda de voluntários e parceiros que compartilham da nossa visão. Nossos projetos são focados em sustentabilidade e empoderamento local.
                    </p>
                    <p class="highlight-text">"Pequenas ações, grandes transformações."</p>
                </div>
            </div>
        </section>

        <section id="values" class="section-padding">
            <div class="text-center">
                <h2>Nossos Valores</h2>
                <p class="section-description">Guiamos nossas ações por princípios de solidariedade, transparência e respeito.</p>
            </div>
            <div class="grid-container text-center">
                <div class="col-12 col-md-4">
                    <h3>Empatia</h3>
                    <p>Colocamo-nos no lugar do outro para entender suas necessidades e desafios.</p>
                </div>
                <div class="col-12 col-md-4">
                    <h3>Integridade</h3>
                    <p>Agimos com ética e transparência em todas as nossas iniciativas.</p>
                </div>
                <div class="col-12 col-md-4">
                    <h3>Colaboração</h3>
                    <p>Acreditamos no poder da união e do trabalho em equipe para alcançar objetivos maiores.</p>
                </div>
            </div>
        </section>

        <section id="call-to-action" class="section-padding section-light-bg text-center">
            <h2>Pronto para Abraçar a Causa?</h2>
            <p class="section-description">Seu apoio é fundamental para continuarmos impactando vidas.</p>
            <a href="#cadastro" class="btn btn-primary btn-large">Quero Ser Voluntário</a>
            <a href="#projetos" class="btn btn-secondary btn-large">Conheça Nossos Projetos</a>
        </section>
    `,
    projetos: `
        <section id="projetos-list" class="section-padding">
            <div class="text-center">
                <h2>Nossos Projetos</h2>
                <p class="section-description">Conheça as iniciativas que estão transformando comunidades.</p>
            </div>

            <div class="grid-container project-cards-grid">
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="project-card">
                        <img src="img/Crianças_em_sala_de_aula_do_projeto_Educação_para_Todos.png" alt="Crianças em sala de aula" class="card-image">
                        <div class="tags-container">
                            <span class="badge badge-education">Educação</span>
                            <span class="badge badge-children">Crianças</span>
                        </div>
                        <h3>Educação para Todos</h3>
                        <p>Oferecemos reforço escolar e atividades lúdicas para crianças e adolescentes, garantindo acesso à educação de qualidade.</p>
                        <a href="#" class="btn btn-primary">Ver Detalhes</a>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4">
                    <div class="project-card">
                        <img src="img/Profissionais_de_saúde_atendendo_a_comunidade.png" alt="Profissionais de saúde atendendo a comunidade" class="card-image">
                        <div class="tags-container">
                            <span class="badge badge-health">Saúde</span>
                            <span class="badge badge-community">Comunidade</span>
                        </div>
                        <h3>Saúde na Comunidade</h3>
                        <p>Realizamos campanhas de vacinação, consultas básicas e palestras sobre higiene e prevenção de doenças.</p>
                        <a href="#" class="btn btn-primary">Ver Detalhes</a>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4">
                    <div class="project-card">
                        <img src="img/Grupo_de_voluntários_felizes_trabalhando_juntos.png" alt="Grupo de voluntários plantando árvores" class="card-image">
                        <div class="tags-container">
                            <span class="badge badge-environment">Meio Ambiente</span>
                            <span class="badge badge-sustainability">Sustentabilidade</span>
                        </div>
                        <h3>Hortas Comunitárias</h3>
                        <p>Incentivamos a criação de hortas orgânicas, promovendo alimentação saudável e sustentabilidade local.</p>
                        <a href="#" class="btn btn-primary">Ver Detalhes</a>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4">
                    <div class="project-card">
                        <img src="img/projeto_empoderamento.png" alt="Mulheres em oficina de artesanato" class="card-image">
                        <div class="tags-container">
                            <span class="badge badge-community">Comunidade</span>
                            <span class="badge badge-education">Empoderamento</span>
                        </div>
                        <h3>Empoderamento Feminino</h3>
                        <p>Workshops e cursos profissionalizantes para mulheres, visando autonomia financeira e desenvolvimento pessoal.</p>
                        <a href="#" class="btn btn-primary">Ver Detalhes</a>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4">
                    <div class="project-card">
                        <img src="img/projeto_idosos.png" alt="Idosos praticando atividades físicas" class="card-image">
                        <div class="tags-container">
                            <span class="badge badge-health">Saúde</span>
                            <span class="badge badge-community">Idosos</span>
                        </div>
                        <h3>Apoio à Terceira Idade</h3>
                        <p>Atividades recreativas, acompanhamento de saúde e socialização para idosos da comunidade.</p>
                        <a href="#" class="btn btn-primary">Ver Detalhes</a>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4">
                    <div class="project-card">
                        <img src="img/projeto_tecnologia.png" alt="Jovens aprendendo em laboratório de informática" class="card-image">
                        <div class="tags-container">
                            <span class="badge badge-education">Educação</span>
                            <span class="badge badge-children">Tecnologia</span>
                        </div>
                        <h3>Inclusão Digital</h3>
                        <p>Aulas de informática básica para crianças e adultos, combatendo a exclusão digital e abrindo novas oportunidades.</p>
                        <a href="#" class="btn btn-primary">Ver Detalhes</a>
                    </div>
                </div>
            </div>
        </section>
    `,
    cadastro: `
        <section id="registration" class="section-padding">
            <div class="contact-form">
                <div class="text-center">
                    <h2>Formulário de Voluntariado</h2>
                    <p class="section-description">Preencha o formulário abaixo para fazer parte da nossa equipe de voluntários!</p>
                    <img src="img/banner_cadastro.png" alt="Banner convidativo para cadastro de voluntários" class="responsive-image section-image" style="margin-bottom: var(--spacing-md);">
                </div>

                <form id="volunteer-form">
                    <fieldset>
                        <legend>Dados Pessoais</legend>
                        <div class="form-group">
                            <label for="nome">Nome Completo:</label>
                            <input type="text" id="nome" name="nome" class="form-control" placeholder="Seu nome completo" required minlength="3">
                            <div class="feedback-message" data-for="nome"></div>
                        </div>
                        <div class="form-group">
                            <label for="email">E-mail:</label>
                            <input type="email" id="email" name="email" class="form-control" placeholder="seu.email@exemplo.com" required>
                            <div class="feedback-message" data-for="email"></div>
                        </div>
                        <div class="form-group">
                            <label for="telefone">Telefone:</label>
                            <input type="tel" id="telefone" name="telefone" class="form-control" placeholder="(DD) XXXXX-XXXX" pattern="^\\(?([0-9]{2})\\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$" required>
                            <div class="feedback-message" data-for="telefone"></div>
                        </div>
                        <div class="form-group">
                            <label for="dataNascimento">Data de Nascimento:</label>
                            <input type="date" id="dataNascimento" name="dataNascimento" class="form-control" required>
                            <div class="feedback-message" data-for="dataNascimento"></div>
                        </div>
                        <div class="form-group">
                            <label for="cidade">Cidade:</label>
                            <input type="text" id="cidade" name="cidade" class="form-control" placeholder="Sua cidade" required minlength="2">
                            <div class="feedback-message" data-for="cidade"></div>
                        </div>
                        <div class="form-group">
                            <label for="estado">Estado:</label>
                            <select id="estado" name="estado" class="form-control" required>
                                <option value="">Selecione um estado</option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SP">São Paulo</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                            </select>
                            <div class="feedback-message" data-for="estado"></div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Interesses e Disponibilidade</legend>
                        <div class="form-group">
                            <label for="areasInteresse">Áreas de Interesse:</label>
                            <textarea id="areasInteresse" name="areasInteresse" class="form-control" rows="4" placeholder="Ex: Educação, Saúde, Meio Ambiente, etc."></textarea>
                        </div>
                        <div class="form-group">
                            <label for="disponibilidade">Disponibilidade (dias/períodos):</label>
                            <input type="text" id="disponibilidade" name="disponibilidade" class="form-control" placeholder="Ex: Terças e Quintas à tarde">
                        </div>
                    </fieldset>
                    
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary btn-large">Enviar Inscrição</button>
                    </div>
                </form>
            </div>
        </section>
    `,
    notFound: `
        <section class="section-padding text-center">
            <h2>Página Não Encontrada (404)</h2>
            <p class="section-description">Desculpe, a página que você está procurando não existe.</p>
            <a href="#home" class="btn btn-primary btn-large">Voltar para Home</a>
        </section>
    `
};