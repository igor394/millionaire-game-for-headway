import Image from 'next/image';

interface ContentDecoratorProps {
  title: string;
  buttonTitle: string;
  description?: string;
  callBack: () => void;
}

const ContentDecorator = ({ title, buttonTitle, description, callBack }: ContentDecoratorProps) => {
  return (
    <div className="decorator-wrapper">
      <div className="image-wrapper">
        <Image alt={'bravo-icon'} src={'bravo.svg'} width={624} height={366} />
      </div>

      <div className="decorator-content">
        <div className="text-wrapper">
          {description && <h4>{description}</h4>}
          <h1>{title}</h1>
        </div>

        <button onClick={callBack} className="restart-button">
          {buttonTitle}
        </button>
      </div>
    </div>
  );
};

export default ContentDecorator;
