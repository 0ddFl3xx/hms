const CopyRight = () => {
  const getCurrentYear = new Date().getFullYear();
  return (
    <p className="copyright mt-10 py-12">© {getCurrentYear} Pulse Care</p>
  );
};

export default CopyRight;
