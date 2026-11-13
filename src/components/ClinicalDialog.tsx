import { useEffect, useRef, type ReactNode } from 'react';
import { X } from 'lucide-react';
/** Native dialog supplies focus containment, Escape dismissal and focus restoration. */
export function ClinicalDialog({ title, children, onClose, wide = false }: {
    title: string;
    children: ReactNode;
    onClose: () => void;
    wide?: boolean;
}) {
    const ref = useRef<HTMLDialogElement>(null);
    useEffect(() => { const dialog = ref.current; dialog?.showModal(); const previous = document.body.style.overflow; document.body.style.overflow = 'hidden'; return () => { dialog?.close(); document.body.style.overflow = previous; }; }, []);
    return <dialog ref={ref} className={`clinical-dialog ${wide ? 'dialog-wide' : ''}`} aria-label={title} onCancel={onClose} onClick={event => { if (event.target === event.currentTarget)
        onClose(); }}><div className="dialog-inner"><button autoFocus className="icon-button dialog-close" aria-label="Close dialog" onClick={onClose}><X size={22}/></button>{children}</div></dialog>;
}
