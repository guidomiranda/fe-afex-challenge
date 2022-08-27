export interface ThemeProviderProps {
    children: React.ReactNode,
    title?: string
};

export interface BarProps {
    drawerWidth: number
};

export interface DeliveryType {
    id:              number;
    fecha:           Date;
    nombre_apellido: string;
    monto:           number;
    pais:            string;
    agente_tipo:     AgenteTipo;
    estado:          Estado;
}

export enum AgenteTipo {
    Banco = 'banco',
    Persona = 'persona',
}

export enum Estado {
    Enviado   = 'enviado', 
    Recibido  = 'recibido',
    Rechazado = 'rechazado', 
    Anulado   = 'anulado',
    Reversado = 'reversado',
}