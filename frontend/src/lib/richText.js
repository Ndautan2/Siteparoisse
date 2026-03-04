/**
 * Process HTML content from the CMS rich text editor.
 * - Makes links open in a new tab (target="_blank" rel="noopener noreferrer")
 * - Cleans up non-breaking spaces
 */
export const processRichText = (html) => {
  if (!html) return '';
  return html
    .replace(/&nbsp;/g, ' ')
    .replace(/<a\s/g, '<a target="_blank" rel="noopener noreferrer" ');
};
