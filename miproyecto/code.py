class avion:
    def __init__(self,estado, embergadura, autonomia):
        self.estado = estado
        self.embergadura = embergadura
        self.autonomia = autonomia

    def iniciarVuelo(self):
        self.estado = "En vuelo"

    def repostar(self):
        if self.autonomia <= 50 and self.estado == "En Vuelo":
            print("Recargar")
        else:
            print("hola")