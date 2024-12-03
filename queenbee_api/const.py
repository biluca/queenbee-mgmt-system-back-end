class HTTP_METHODS:
    GET = "GET"
    POST = "POST"
    PUT = "PUT"
    PATCH = "PATCH"
    DELETE = "DELETE"
    HEAD = "HEAD"
    OPTIONS = "OPTIONS"
    TRACE = "TRACE"

class GenericStatus:
    CHOICES = (
        ## APPOINTMENT
        ("ABERTO", "Aberto", "APPOINTMENT"),
        ("CONCLUIDO", "Concluído", "APPOINTMENT"),
        ("CANCELADO", "Cancelado", "APPOINTMENT"),
        ("PENDENTE", "Pendente", "APPOINTMENT"),
    )

    @classmethod
    def get(cls, model: str) -> list:
        return [(key, value) for key, value, mdl in cls.CHOICES if mdl == model]

class GenericValues:
    CHOICES = (
        ## FINANCE
        ("ATUALIZACAO_JOIA", "Atualização de Jóias", "FINANCE_CATEGORY"),
        ("CONSULTA", "Consultas", "FINANCE_CATEGORY"),
        ("EQUIPAMENTO", "Compra de Equipamentos", "FINANCE_CATEGORY"),
        ("FIXAS", "Despesas Fixas", "FINANCE_CATEGORY"),
        ("LICENCAS", "Licenças", "FINANCE_CATEGORY"),
        ("LUCROS", "Divisão de Lucros", "FINANCE_CATEGORY"),
        ("MANUTENCAO", "Manutenções Gerais", "FINANCE_CATEGORY"),
        ("MARKETING", "Marketing", "FINANCE_CATEGORY"),
        ("MATERIAL_ESCRITORIO", "Material de Escritório", "FINANCE_CATEGORY"),
        ("MATERIAL_PRODUCAO", "Material de Produção", "FINANCE_CATEGORY"),
        ("PERFURACAO", "Perfurações", "FINANCE_CATEGORY"),
        ("RESERVA", "Reserva", "FINANCE_CATEGORY"),
        ("TAXAS_IMPOSTOS", "Taxas e Impostos", "FINANCE_CATEGORY"),
        ("TREINAMENTO", "Treinamenos & Especializações", "FINANCE_CATEGORY"),
        ("VENDA_JOIA", "Vendas de Jóias", "FINANCE_CATEGORY"),

         ## FINANCE TYPE
        ("INCOME", "Receita", "FINANCE_TYPE"),
        ("EXPENSE", "Despesa", "FINANCE_TYPE"),

        ## PAYMENTS
        ("DINHEIRO", "Dinheiro", "PAYMENT"),
        ("CARTAO_CREDITO", "Cartão de Crédito", "PAYMENT"),
        ("CARTAO_DEBITO", "Cartão de Débito", "PAYMENT"),
        ("PERMUTA", "Permutas", "PAYMENT"),
        ("PIX", "Pix", "PAYMENT"),

        ## APPOINTMENT
        ("PERFURACAO", "Perfuração", "APPOINTMENT"),
        ("ATUALIZACAO", "Atualização", "APPOINTMENT"),
        ("ATENDIMENTO", "Atendimento", "APPOINTMENT"),
        ("CONSULTA", "Consulta", "APPOINTMENT"),
    )

    @classmethod
    def get(cls, model: str) -> list:
        return [(key, value) for key, value, mdl in cls.CHOICES if mdl == model]