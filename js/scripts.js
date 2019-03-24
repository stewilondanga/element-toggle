var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

const tags = {
  'a': `The anchor tag.
        You can use it to make links.<br><br>
        Attributes: <strong>(includes global attributes)</strong>
        <ul>
          <li>href: The location to the link.</li>
          <li>title: A little thing that pops up above the link if you hover over the link.</li>
          <li>download: (New in HTML5) Specifies if you want to download the link. You don't need to specify a value, just specify the attribute to use it.</li>
          <li>target: Specifies the target you want to open the link. "_blank" is the most common, and it opens the link in a new window.</li>
        </ul>
        Example: &lt;a href="https://www.example.com/" target="_blank" title="Example.com"&gt;Example.com&lt;/a&gt;
 &nbsp; Result: <a href="https://www.example.com/" target="_blank" title="Example.com">Example.com</a>
 &nbsp; <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">Full Reference</a>`,
  'b': `The bold tag.
        You can use it to make text bolded.<br><br>
        Atributes: <strong>This tag only includes global attributes.</strong>
        Example: &lt;b&gt;Bolded&lt;/b&gt;
 &nbsp; Result: <b>Bolded</b>
 &nbsp; <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b">Full Reference</a>`,
  'strong': `The strong tag.
             You can use it to make the text look like it has strong importance.<br><br>
             Atributes: <strong>This tag only includes global attributes.</strong>
             Example: &lt;strong&gt;Strong Importance&lt;/strong&gt;
      &nbsp; Result: <strong>Strong Importance</strong>
      &nbsp; <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong">Full Reference</a>`,
  'i': `The italics tag.
        You can use it to make text italic.<br><br>
        Atributes: <strong>This tag only includes global attributes.</strong>
        Example: &lt;i&gt;Italic&lt;/i&gt;
 &nbsp; Result: <i>Italic</i>
 &nbsp; <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i">Full Reference</a>`
};
let indexes = [];
$(document).ready(function() {
  $.each(tags, (key, val) => {
    indexes.push(key);
    $('#app').append('<div class="element he" data-clickedon="false">' + key + '</div>');
  });
  $('.element').dblclick(function() {
    if ($(this).data('clickedon') == 'false') {
      $(this)
        .data('clickedon', 'true')
        .animate({
          width: '0%'
        }, () => {
          $(this)
            .animate({
              width: '97%'
            })
            .html(indexes[$(this).index()])
            .addClass('he');
        })
    } else {
      $(this)
        .data('clickedon', 'false')
        .animate({
          width: '0%'
        }, () => {
          $(this)
            .animate({
              width: '97%'
            })
            .html(tags[indexes[$(this).index()]])
            .removeClass('he');
        })
    }
  });
});
