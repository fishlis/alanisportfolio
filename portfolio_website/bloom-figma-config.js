/** Bloom — links to your Figma file (node 5-13 and per-section frames). */
window.BLOOM_FIGMA = {
  fileKey: "uh1BgJ21ecIaJ5q3zx9Hci",
  designUrl:
    "https://www.figma.com/design/uh1BgJ21ecIaJ5q3zx9Hci/html.to.design-%E2%80%94-by-%E2%80%B9div%E2%80%BARIOTS-%E2%80%94-Import-websites-to-Figma-designs--web-html-css---Community-",

  openUrl:
    "https://www.figma.com/design/uh1BgJ21ecIaJ5q3zx9Hci/html.to.design-%E2%80%94-by-%E2%80%B9div%E2%80%BARIOTS-%E2%80%94-Import-websites-to-Figma-designs--web-html-css---Community-?node-id=5-13&t=B3NtXY2VqBObk2xM-1",

  /** Update node-id after Copy link to selection in Figma for each frame. */
  nodes: {
    "bloom-hero": "5-13",
    "character-design": "5-13",
    "scene-designing": "5-13",
    "animatic": "5-13",
    "seasonal-dream": "5-13"
  },

  figmaLink: function (nodeId) {
    return (
      this.designUrl +
      "?node-id=" +
      (nodeId || "5-13") +
      "&t=B3NtXY2VqBObk2xM-1"
    );
  }
};
