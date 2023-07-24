interface ErrorMessageProps {
  errorMessage: string | undefined;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMessage }) => {
  return (
    <p role="alert" className="errorMessage">
      {errorMessage}
    </p>
  );
};

export default ErrorMessage;
