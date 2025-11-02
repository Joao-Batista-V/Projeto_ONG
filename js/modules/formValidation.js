// js/modules/formValidation.js

export function setupFormValidation() {
    const form = document.getElementById('volunteer-form');
    if (!form) return; // Garante que a validação só tente configurar se o formulário existe

    const formControls = form.querySelectorAll('.form-control');
    const feedbackMessages = form.querySelectorAll('.feedback-message');

    // Funções de validação específicas
    const validators = {
        nome: (input) => {
            if (input.value.length < 3) return 'O nome deve ter pelo menos 3 caracteres.';
            return '';
        },
        email: (input) => {
            if (!input.value.includes('@') || !input.value.includes('.')) return 'E-mail inválido.';
            return '';
        },
        telefone: (input) => {
            // Regex para (DD) XXXXX-XXXX
            const regex = /^(\(?\d{2}\)?\s?)(\d{4,5}[-\s]?\d{4})$/;
            if (!regex.test(input.value)) return 'Telefone inválido. Formato esperado: (DD) XXXXX-XXXX ou (DD) XXXX-XXXX.';
            return '';
        },
        dataNascimento: (input) => {
            const dataNasc = new Date(input.value);
            const hoje = new Date();
            if (dataNasc > hoje) return 'Data de nascimento não pode ser no futuro.';
            const idadeMinima = 16; // Exemplo: voluntário deve ter pelo menos 16 anos
            const idade = hoje.getFullYear() - dataNasc.getFullYear();
            const mes = hoje.getMonth() - dataNasc.getMonth();
            if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
                if (idade - 1 < idadeMinima) return `Você deve ter pelo menos ${idadeMinima} anos.`;
            } else if (idade < idadeMinima) {
                return `Você deve ter pelo menos ${idadeMinima} anos.`;
            }
            return '';
        },
        cidade: (input) => {
            if (input.value.length < 2) return 'A cidade deve ter pelo menos 2 caracteres.';
            return '';
        },
        estado: (input) => {
            if (input.value === '') return 'Selecione um estado.';
            return '';
        }
    };

    const validateInput = (input) => {
        let errorMessage = '';
        if (input.hasAttribute('required') && input.value.trim() === '') {
            errorMessage = 'Este campo é obrigatório.';
        } else if (validators[input.id]) {
            errorMessage = validators[input.id](input);
        } else if (input.checkValidity() === false) { // Validação nativa do navegador para outros tipos (e.g. pattern)
            errorMessage = input.validationMessage;
        }

        const feedbackDiv = document.querySelector(`.feedback-message[data-for="${input.id}"]`);
        if (feedbackDiv) {
            feedbackDiv.textContent = errorMessage;
            if (errorMessage) {
                feedbackDiv.style.color = 'var(--error-color)';
                feedbackDiv.style.fontSize = 'var(--font-size-sm)';
                feedbackDiv.style.marginTop = '4px';
                input.classList.add('invalid');
                input.classList.remove('valid');
            } else {
                feedbackDiv.textContent = '';
                input.classList.remove('invalid');
                input.classList.add('valid');
            }
        }
        return !errorMessage; // Retorna true se válido, false se inválido
    };

    // Adiciona validação em tempo real ao perder o foco (blur)
    formControls.forEach(input => {
        input.addEventListener('blur', () => {
            validateInput(input);
        });
        // Adiciona validação ao digitar para alguns campos (opcional, pode ser intrusivo)
        input.addEventListener('input', () => {
             // Valida apenas se o campo já foi focado ou se o formulário já foi submetido
            if (input.classList.contains('invalid') || input.classList.contains('valid')) {
                validateInput(input);
            }
        });
    });

    // Validação na submissão do formulário
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Previne o envio padrão do formulário

        let formIsValid = true;
        formControls.forEach(input => {
            if (!validateInput(input)) {
                formIsValid = false;
            }
        });

        if (formIsValid) {
            alert('Formulário enviado com sucesso! Obrigado por se cadastrar como voluntário.');
            form.reset(); // Limpa o formulário
            // Opcional: remover classes de validação após reset
            formControls.forEach(input => {
                input.classList.remove('valid', 'invalid');
                const feedbackDiv = document.querySelector(`.feedback-message[data-for="${input.id}"]`);
                if (feedbackDiv) feedbackDiv.textContent = '';
            });
            // Você pode enviar os dados para um servidor aqui
            // console.log('Dados do formulário:', Object.fromEntries(new FormData(form)));
        } else {
            alert('Por favor, corrija os erros no formulário antes de enviar.');
        }
    });
}