import clsx from "clsx";

export const Container = ({ children, className }: {
    children: React.ReactNode;
    className: string
}) => {
    return <div className={clsx("max-w-345 2xl:px-0 px-6 lg:px-10", className)}>
        {children}
    </div>
}