

<br><a name="index.js"></a>

# index.js
> React specific utility functions.

**Author**: Paul Walton  

<br>

## Functions

<dl>
<dt><a href="docs/mergeRefs.md">mergeRefs(...refs)</a> ⇒ <code>React.Ref</code></dt>
<dd><p>Merge React refs.</p>
</dd>
<dt><a href="docs/getDisplayName.md">getDisplayName(WrappedComponent)</a> ⇒ <code>string</code></dt>
<dd><p>Display name helper for HOCs.</p>
</dd>
<dt><a href="docs/isFunctionalComponent.md">isFunctionalComponent(Component)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test if component is functional.</p>
</dd>
<dt><a href="docs/isClassComponent.md">isClassComponent(Component)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test if component is a class component.</p>
</dd>
<dt><a href="docs/useStatefulProp.md">useStatefulProp(prop)</a> ⇒ <code>Array.&lt;React.ComponentState, React.SetStateAction&gt;</code></dt>
<dd><p>Get a piece of state that updates with prop changes.</p>
</dd>
<dt><a href="docs/nl2br.md">nl2br(text)</a> ⇒ <code>Array.&lt;React.ReactFragment&gt;</code></dt>
<dd><p>Convert newlines to HTML <code>&lt;br&gt;</code> elements.</p>
</dd>
</dl>


<br><a name="mergeRefs"></a>

## mergeRefs(...refs) ⇒ <code>React.Ref</code>
> Merge React refs.

Merge React refs. If only one potential ref is passed in, returns that ref.


| Param | Type |
| --- | --- |
| ...refs | <code>React.Ref</code> | 


<br><a name="getDisplayName"></a>

## getDisplayName(WrappedComponent) ⇒ <code>string</code>
Display name helper for HOCs.


| Param | Type | Description |
| --- | --- | --- |
| WrappedComponent | <code>React.Component</code> | A React component. |


<br><a name="isFunctionalComponent"></a>

## isFunctionalComponent(Component) ⇒ <code>boolean</code>
> Test if component is functional.

Test if component is functional.
eg. for when checking if you should forward refs when creating HOCs.


| Param | Type | Description |
| --- | --- | --- |
| Component | <code>React.Component</code> | A React component. |


<br><a name="isClassComponent"></a>

## isClassComponent(Component) ⇒ <code>boolean</code>
> Test if component is a class component.

Test if component is a class component.
eg. for when checking if you should forward refs when creating HOCs.


| Param | Type | Description |
| --- | --- | --- |
| Component | <code>React.Component</code> | A React component. |


<br><a name="useStatefulProp"></a>

## useStatefulProp(prop) ⇒ <code>Array.&lt;React.ComponentState, React.SetStateAction&gt;</code>
Get a piece of state that updates with prop changes.

**Returns**: <code>Array.&lt;React.ComponentState, React.SetStateAction&gt;</code> - React state hook tuple.  

| Param | Type | Description |
| --- | --- | --- |
| prop | <code>\*</code> | Property to update with, acts as initial/most recent state. |


<br><a name="nl2br"></a>

## nl2br(text) ⇒ <code>Array.&lt;React.ReactFragment&gt;</code>
Convert newlines to HTML `<br>` elements.


| Param | Type |
| --- | --- |
| text | <code>string</code> | 

