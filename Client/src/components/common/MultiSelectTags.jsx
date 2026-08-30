import { useState } from 'react';
import { X, Plus, Sparkles } from 'lucide-react';

const MultiSelectTags = ({
  label,
  selectedTags = [],
  onChange,
  suggestions = [
    'Wheat (गेहूं)',
    'Rice / Paddy (धान)',
    'Cotton (कपास)',
    'Sugarcane (गन्ना)',
    'Maize (मक्का)',
    'Mustard (सरसों)',
    'Soybean (सोयाबीन)',
    'Pulses / Dal (दालें)',
    'Potato (आलू)',
    'Tomato (टमाटर)',
    'Onion (प्याज)',
    'Spices (मसाले)',
    'Fruits (फल)',
    'Vegetables (सब्जियां)',
  ],
  placeholder = 'Type a crop name and press Enter...',
  required = false,
  error,
  helperText,
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddTag = (tagToAdd) => {
    const trimmed = tagToAdd.trim();
    if (!trimmed) return;
    if (!selectedTags.includes(trimmed)) {
      onChange([...selectedTags, trimmed]);
    }
    setInputValue('');
  };

  const handleRemoveTag = (tagToRemove) => {
    onChange(selectedTags.filter((t) => t !== tagToRemove));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag(inputValue);
    }
  };

  return (
    <div className="form-group">
      {label && (
        <label className="form-label">
          {label} {required && <span className="required-star">*</span>}
        </label>
      )}

      {/* Selected Tags Display */}
      <div className={`tag-container ${error ? 'has-error' : ''}`}>
        {selectedTags.length === 0 ? (
          <span className="tag-empty-hint">No crops selected yet. Choose below or type to add.</span>
        ) : (
          selectedTags.map((tag) => (
            <span key={tag} className="tag-chip">
              <span>{tag}</span>
              <button
                type="button"
                onClick={() => handleRemoveTag(tag)}
                className="tag-remove-btn"
                aria-label={`Remove ${tag}`}
              >
                <X size={14} />
              </button>
            </span>
          ))
        )}
      </div>

      {/* Input to type custom tag */}
      <div className="tag-input-row">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="form-input tag-custom-input"
        />
        <button
          type="button"
          onClick={() => handleAddTag(inputValue)}
          disabled={!inputValue.trim()}
          className="btn-add-tag"
        >
          <Plus size={16} /> Add
        </button>
      </div>

      {/* Quick Suggestions */}
      {suggestions.length > 0 && (
        <div className="tag-suggestions-box">
          <span className="tag-suggestions-label">
            <Sparkles size={13} /> Quick Suggestions:
          </span>
          <div className="tag-suggestions-list">
            {suggestions.map((item) => {
              const isSelected = selectedTags.includes(item);
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => (isSelected ? handleRemoveTag(item) : handleAddTag(item))}
                  className={`tag-suggestion-chip ${isSelected ? 'is-selected' : ''}`}
                >
                  {isSelected ? '✓ ' : '+ '} {item}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {error && <p className="form-error-msg">{error}</p>}
      {!error && helperText && <p className="form-helper-text">{helperText}</p>}
    </div>
  );
};

export default MultiSelectTags;
