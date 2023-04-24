export type Workspace = { id: number; name: string; type: "workspace" };

export interface I3Event {
  event: "wm-event:workspace";
  data:
    | {
        change: "focus";
        current: Workspace;
        old: Workspace;
      }
    | {
        change: "empty";
        current: Workspace;
        old: null;
      };
}
