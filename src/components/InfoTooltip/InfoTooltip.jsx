import "./InfoTooltip.css";

function InfoTooltip({ onClose, settings }) {
  return (
    <div
      className={`infoTooltip ${
        settings.isCorrect
          ? "infoTooltip_type_correct"
          : "infoTooltip_type_error"
      }`}
      onClick={onClose}
    >
      <button type="button" className="infoTooltip__close-button" />
      <p className="infoTooltip__text">
        {settings.message || "Что то пошло не так..."}
      </p>
    </div>
  );
}

export default InfoTooltip;
