export interface Package {
    title: string;
    subtitle: string;
    features: string[];
    note?: string;
}

export interface ModalProps {
    id: string;
    title: string;
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export interface PackageCardProps {
    package: Package;
}

export interface NavLinkProps {
    onClick: () => void;
    children: React.ReactNode;
    href?: string;
    target?: string;
    rel?: string;
}
